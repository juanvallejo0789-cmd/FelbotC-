require('dotenv').config();

global.owner = [['573000000000', 'JV4llejoo', true]]; 
global.mods = [];
global.prems = [];

global.packname = 'P3X BOT';
global.author = 'JV4llejoo';
global.botname = 'P3X BOT 夜';
global.vs = '2.0';

global.channelInfo = {
    contextInfo: {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363409628624676@newsletter',
            newsletterName: '✧ 𝕻3𝖃 𝕭𝕺𝕿 | 𝕺𝖋𝖎𝖈𝖎𝖆𝖑 𝕮𝕴𝕬𝕹𝕹𝕰𝕃 ✧',
            serverMessageId: -1
        }
    }
};

global.APIs = {
    xteam: 'https://api.xteam.xyz',
    dzx: 'https://api.dhamzxploit.my.id',
    lol: 'https://api.lolhuman.xyz',
    violetics: 'https://violetics.pw',
    neoxr: 'https://api.neoxr.my.id',
    zenzapis: 'https://zenzapis.xyz',
    akuari: 'https://api.akuari.my.id',
    akuari2: 'https://apimu.my.id',
    nrtm: 'https://fg-nrtm.ddns.net',
    bg: 'http://bochil.ddns.net',
    fgmods: 'https://api-fgmods.ddns.net'
};

global.APIKeys = {
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
    'https://api.neoxr.my.id': 'yourkey',
    'https://violetics.pw': 'beta',
    'https://zenzapis.xyz': 'yourkey',
    'https://api-fgmods.ddns.net': 'fg-dylux'
};

module.exports = {
    WARN_COUNT: 3,
    APIs: global.APIs,
    APIKeys: global.APIKeys
};
