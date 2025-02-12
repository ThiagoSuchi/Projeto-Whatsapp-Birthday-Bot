"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    "type": "sqlite",
    "database": path_1.default.resolve(__dirname, "../../database/whatsapp-bot.db"),
    "synchronize": true,
    "logging": false,
    "entities": ["src/entities/*.ts"]
});
