import schedule from 'node-schedule';
import { initWhatsapp, sendMessage } from './whatsapp';
import { verifyBirthday } from '../services/aniversariante';

export async function initScheduling() {
    console.log("Agendamento iniciado para verificar aniversariantes");

    // Agendamento diário apartir das 8h
    schedule.scheduleJob("0 8 * * *", async () => {
        console.log("Executando tarefa de verificação de aniversariantes...");

        try {
            const client = await initWhatsapp();
            const birthdays = await verifyBirthday();

            if(birthdays.length === 0) {
                console.log("Nenhum aniversariante encontrado hoje.");
            } else {
                for (const contact of birthdays) {
                    if (contact.name && contact.number) {
                        await sendMessage(client, contact.name, contact.number)
                    }
                }
            }
        } catch (error) {
            console.error("Erro ao executar o agendamento: ", error);
        }
    })
}