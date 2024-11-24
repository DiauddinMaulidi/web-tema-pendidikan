import User from "../models/users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const getUsers = async (req, res) => {
    try {
        const datas = await User.findAll({ attributes: ["id", "name", "email"] })
        res.json(datas)
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    try {
        const { name, email, password, confPassword } = req.body

        const findEmail = await User.findOne({ where: { email: email } })
        if (findEmail) return res.status(404).json({ msg: "email yang anda gunakan sudah ada" })
        if (password !== confPassword) return res.status(404).json({ msg: "password anda tidak sama dengan confirmasi password" })

        const users = await User.create({
            name,
            email,
            password
        })
        res.json(`${users.email} berhasil didaftar`)
    } catch (error) {
        res.json(error.message)
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const datas = await User.findOne({ where: { email: email } })
        if (!datas) return res.status(404).json({ msg: "email yang anda gunakan tidak dapat di temukan" })

        const findPass = await bcrypt.compare(password, datas.password)
        if (!findPass) return res.status(404).json({ msg: "password anda salah" })

        const userId = datas.id
        const userName = datas.name
        const userEmail = datas.email
        const accessToken = jwt.sign({ userId, userName, userEmail }, process.env.ACCESS_TOKEN, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({ userId, userName, userEmail }, process.env.REFRESH_TOKEN, {
            expiresIn: '1d'
        })
        await User.update({ refresh_token: refreshToken }, { where: { id: userId } })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({ accessToken })
    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req, res) => {
    try {
        const token = req.cookies.refreshToken
        if (!token) return res.sendStatus(204)
        const users = await User.findOne({
            where: { refresh_token: token }
        })
        if (!users) return res.sendStatus(204);

        const id = users.id
        await User.update({ refresh_token: null }, { where: { id: id } })
        res.clearCookie('refreshToken');
        res.end()
    } catch (error) {
        console.log(error);
    }
}