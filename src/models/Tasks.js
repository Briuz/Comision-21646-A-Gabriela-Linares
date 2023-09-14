import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TaskModel = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(10000),
        allowNull: false
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
})