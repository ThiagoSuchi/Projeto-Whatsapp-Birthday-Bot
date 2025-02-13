import { initScheduling } from "./bot/scheduler";
import { AppDataSource } from "./config/data-source";
import { Contact } from "./entities/contact";

AppDataSource.initialize()
    .then(async () => {
        console.log('Banco de dados conectado.');
        initScheduling(); // Inicia o agendamento de aniversariantes
    })
    .catch((error) => {
        console.log(error);
    })