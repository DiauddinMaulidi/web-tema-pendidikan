import { DataTypes } from "sequelize"
import { sequelize } from "./db.js"
import bycript from "bcrypt"

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
            this.setDataValue("password", bycript.hashSync(value, 10))
        }
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    modelName: "users",
})

// User.sync()

export default User