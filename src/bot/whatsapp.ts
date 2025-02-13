import { create, Whatsapp } from "venom-bot";

// Inicializa o venom-bot, e retorna o cliente do whatsapp
async function initWhatsapp(): Promise<Whatsapp> {
    return new Promise((resolve, reject) => {
        create({
            session: "whatsapp-bot", // Nome da sessão
        })
            .then(client => {
                console.log("Whatsapp conectado com sucesso.");
                resolve(client)
            })
            .catch(error => {
                console.log("Erro ao conectar ao whatsapp: ", error);
                reject(error)
            })
    })
}

// Função para enviar mensagem para o contato aniversariante.
async function sendMessage(client: Whatsapp, name: string, number: string) {
    const msg = `
        Olá ${name}, vim aqui para lhe desejar um feliz aniversário 🎉🎂🎉🎂 
        que seu dia seja repleto de bençãos e alegrias, Deus abençoe grandemente sua vida!`;
    
    try{
        await client.sendText(number + "@c.us", msg);
        console.log(`Mensagem enviada para ${name}`);
    } catch(error) {
        console.log(`Erro ao enviar mensagem para ${name}: ${error}`);
    }
}

export { initWhatsapp, sendMessage };