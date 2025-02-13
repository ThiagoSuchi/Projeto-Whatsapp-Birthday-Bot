import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "sqlite",
    "database": path.resolve(__dirname, "../../database/whatsapp-bot.db"),
    "synchronize": true, // Uso restrito, apenas no desenvolvimneto
    "logging": false,
    "entities": ["src/entities/*.ts"]
})