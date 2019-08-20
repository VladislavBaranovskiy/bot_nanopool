
var TelegramBot = require('node-telegram-bot-api');
var request = require('request');
var token = 'token';
var botOptions = {   polling: true };
var bot = new TelegramBot(token, botOptions);

bot.on('text', function(msg) {
    var messageChatId = msg.chat.id;
    var messageText = msg.text;


    request({url: 'https://api.nanopool.org/v1/eth/reportedhashrate/0x30ff4880c9444af729d58a463728214411f11700/rx570', json: true},
        function(err, res, json) {
        if (err) {
            throw err;
        }
            if (messageText === '/test') {
                bot.sendMessage(messageChatId, 'rx570' + 'Hashrate:' + json.data + '     ' + 'Статус:'+ json.status);
            }
    });

    request({url: 'https://api.nanopool.org/v1/eth/reportedhashrate/0x30ff4880c9444af729d58a463728214411f11700/mama', json: true},
        function(err, res, json) {
            if (err) {
                throw err;
            }

            if (messageText === '/test') {
                bot.sendMessage(messageChatId, 'mama' + 'Hashrate:' + json.data + '     ' + 'Статус:'+ json.status);
            } });

    request({url: 'https://api.nanopool.org/v1/eth/reportedhashrate/0x30ff4880c9444af729d58a463728214411f11700/mamalena', json: true},
        function(err, res, json) {
            if (err) {
                throw err;
            }

            if (messageText === '/test') {
                bot.sendMessage(messageChatId, 'mamalena' + 'Hashrate:' + json.data + '     ' + 'Статус:'+ json.status);
            } });

    request({url: 'https://api.nanopool.org/v1/eth/reportedhashrate/0x30ff4880c9444af729d58a463728214411f11700/larysa', json: true},
        function(err, res, json) {
            if (err) {
                throw err;
            }

            if (messageText === '/test') {
                bot.sendMessage(messageChatId, 'larysa' + 'Hashrate:' + json.data + '     ' + 'Статус:'+ json.status);
            } });


});
