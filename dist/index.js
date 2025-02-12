"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./config/data-source");
const contact_1 = require("./entities/contact");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Banco de dados conectado.');
    const repo = data_source_1.AppDataSource.getRepository(contact_1.Contact);
    const newContact = repo.create({
        name: 'Carlos',
        number: '69984341888',
        birthday: '10/03/2025'
    });
    yield repo.save(newContact);
    console.log('Contato salvo.');
}))
    .catch((error) => {
    console.log(error);
});
