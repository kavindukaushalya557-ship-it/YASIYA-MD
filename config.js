const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NEIETByK#dmn7IYWeE_Ow7H7QWtp8nWh18jbfnfFH5jgB_dG7bnY'
};
