const path = require('path');

const settings = {
    packname: 'P3X BOT',
    author: 'JV4llejoo',
    botName: 'P3X BOT 夜',
    
    ownerNumber: '573117354305',
    ownerLid: '274517599482100@lid',
    privilegedNumbers: [],

    welcomeAudioPath: process.env.WELCOME_AUDIO_PATH || path.join(__dirname, 'assets', 'welcome.mp3'),
    goodbyeAudioPath: process.env.GOODBYE_AUDIO_PATH || path.join(__dirname, 'assets', 'goodbye.mp3'),
    goodbyeImagePath: process.env.GOODBYE_IMAGE_PATH || path.join(__dirname, 'assets', 'imagenes', 'welcome'),
    
    channelInfo: {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363409628624676@newsletter',
                newsletterName: '✧ 𝕻3𝖃 𝕭𝕺𝕿 | 𝕺𝕗𝖎𝖈𝖎𝖆𝖑 𝕮𝕴𝕬𝕹𝕹𝕰𝕃 ✧',
                serverMessageId: -1
            }
        }
    }
};

module.exports = settings;
