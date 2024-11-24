import express from "express"
import router from "./src/router/authRouter.js"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import cors from "cors"
import Barang from "./src/models/barang.js"
import tanggalan from "./src/models/date.js"

const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(router)

app.get("/data", async (req, res) => {
    try {
        const datas = await Barang.findAll()
        res.json(datas)
    } catch (error) {
        res.json({ msg: error.message })
    }
})

app.post("/data", async (req, res) => {
    const { nama_barang, tanggal_masuk, stok } = req.body
    try {
        await Barang.create({
            nama_barang,
            tanggal_masuk: tanggalan(tanggal_masuk),
            stok
        })
        res.json({ msg: "berhasil menambahkan barang" })
    } catch (error) {
        res.json({ msg: error.message })
    }
})

app.listen(8000, '0.0.0.0', () => {
    console.log("berhasil berjalan di http://localhost:8000")
})
