import { AppDataSource } from "./config/data-source";
import { Contact } from "./entities/contact";

AppDataSource.initialize()
    .then(async () => {
        console.log('Banco de dados conectado.');
        
        const repo = AppDataSource.getRepository(Contact);

        const newContact = repo.create({
            name: 'Carlos',
            number: '69984341888',
            birthday: '10/03/2025'
        });

        await repo.save(newContact)
        console.log('Contato salvo.');
    })
    .catch((error) => {
        console.log(error);
    })