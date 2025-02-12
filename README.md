# WhatsApp Birthday Bot

Este projeto tem como objetivo criar um sistema automatizado que detecta aniversários de contatos no WhatsApp e envia mensagens de felicitação programadas. Ele foi desenvolvido com foco na prática de habilidades em TypeScript, banco de dados, e no uso de bibliotecas e ferramentas modernas para automação e integração.

---

## Objetivo do Projeto

O principal objetivo deste projeto é a **aprendizagem prática**. Por meio do desenvolvimento deste sistema, pude explorar conceitos-chave em:

- **TypeScript**: Fortalecendo o uso de uma linguagem tipada para maior robustez no código.
- **Banco de Dados SQLite**: Criando e manipulando uma base de dados local para armazenar informações sobre os aniversários dos contatos.
- **Automação com WhatsApp**: Utilizando bibliotecas como [venom-bot](https://github.com/orkestral/venom) para interagir com o WhatsApp.
- **Gerenciamento de tarefas agendadas**: Usando ferramentas para garantir que as mensagens sejam enviadas automaticamente na data correta.

---

## Descrição do Funcionamento

1. **Cadastro de Contatos**: Os contatos são registrados no banco de dados com seu nome, número de WhatsApp e data de aniversário.
2. **Verificação Diária**: Um sistema agendado verifica diariamente a base de dados para identificar aniversariantes do dia.
3. **Envio de Mensagens**: Ao encontrar aniversariantes, o bot envia automaticamente uma mensagem personalizada de felicitações pelo WhatsApp.

---

## Ferramentas e Tecnologias Utilizadas

- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados**: [SQLite](https://sqlite.org/index.html)
- **Biblioteca de WhatsApp**: [venom-bot](https://github.com/orkestral/venom)
- **Task Scheduler**: [node-schedule](https://www.npmjs.com/package/node-schedule) para agendamento de tarefas.
- **Node.js**: Ambiente de execução JavaScript.
- **Visual Studio Code**: Editor de código utilizado para desenvolvimento.
- **qrcode-terminal**: Biblioteca usada para gerar e exibir o QR Code para o login no WhatsApp Web.
- **reflect-metadata**: Necessária para o TypeORM trabalhar com decoradores.
- **TypeORM**: ORM para interagir com o SQLite de forma mais simples e estruturada.

---

## Estrutura do Projeto

```
├── database/
│    └── whatsapp-bot.db          // Banco de dados SQLite (será gerado automaticamente)
│
├── dist/                         // Código transpilado de TS para JS
│
├── src/
│   ├── config/
│   │   └── data-source.ts         // Configuração do SQLite
│   │
│   ├── entities/
│   │   └── Contact.ts            // Arquivo que define a tabela de contatos no banco de dados.
│   │
│   ├── bot/
│   │   ├── whatsapp.ts           // Configuração do venom-bot
│   │   │
│   │   └── scheduler.ts          // Agendamento de tarefas
│   │
│   ├── services/
│   │   └── aniversariantes.ts    // Função para verificar aniversariantes e enviar mensagens
│   │
│   └── index.ts                  // Arquivo principal do projeto
│
├── README.md                     // Documentação do projeto
│
└── package.json                  // Dependências e scripts
```

---

## Como Executar o Projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Configure o banco de dados:

   - O banco SQLite será gerado automaticamente com base nas configurações em `connection.ts`.

3. Inicie o bot:

   ```bash
   npm start
   ```

---

## Pontos de Destaque

- **Aprendizado Prático**: Este projeto foi idealizado para reforçar conceitos em desenvolvimento backend, integração com APIs externas e automação.
- **Acessibilidade**: Toda a estrutura foi pensada para ser clara e bem documentada, permitindo que mesmo pessoas iniciantes possam entender o funcionamento.

---

## Possíveis Expansões Futuras

- **Implantação em Nuvem**: Configurar o bot para rodar em serviços como AWS ou Heroku, garantindo funcionamento 24/7.

---

## Considerações Finais

Este projeto é uma forma de consolidar conhecimentos técnicos em TypeScript, automação e banco de dados. Ele também reflete a minha dedicação em criar soluções práticas e funcionais, com aplicações reais que podem ser expandidas para atender necessidades empresariais ou pessoais.

Se você gostou deste projeto ou tem sugestões, fique à vontade para entrar em contato ou contribuir!



