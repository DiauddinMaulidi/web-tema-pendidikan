import { DataTypes } from "sequelize"
import { sequelize } from "./db.js"

const Barang = sequelize.define("Barang", {
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_masuk: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    modelName: "barangs",
})

// Barang.sync()

export default Barang