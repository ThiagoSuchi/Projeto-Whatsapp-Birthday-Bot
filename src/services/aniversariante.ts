import { AppDataSource } from "../config/data-source";
import { Contact } from "../entities/contact";

export async function verifyBirthday(): Promise<Contact[]> {
    const today = new Date().toISOString().slice(0, 10); // YYYY/MM/DD
    const repo = AppDataSource.getRepository(Contact);
    
    // Buscar pelos contatos onde o aniversário coincide com a data atual.
    const birthdays = await repo.find({
        where: {birthday: today}
    });

    return birthdays;
}