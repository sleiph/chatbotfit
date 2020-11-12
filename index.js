const TelegramBot = require('node-telegram-bot-api');

// token recebido pelo bot father
const token = 'COLOQUE SEU TOKEN DO BOTFATHER AQUI';

const bot = new TelegramBot(token, { polling: true });