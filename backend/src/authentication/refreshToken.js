import User from "../models/users.js";
import jwt from 'jsonwebtoken'

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.sendStatus(401)

        const users = await User.findAll({ where: { refresh_token: refreshToken } })
        if (!users) return res.sendStatus(403)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
            if (err) return res.sendStatus(401)
            const id = users.userId
            const name = users.userName
            const email = users.userEmail
            const accessToken = jwt.sign({ id, name, email }, process.env.ACCESS_TOKEN, {
                expiresIn: '20s'
            })
            res.json({ accessToken })
        })
    } catch (error) {
        res.send(error.message);
    }
}
