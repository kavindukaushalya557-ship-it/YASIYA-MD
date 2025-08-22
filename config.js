const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~4Ew0XTrL#u9Vl6ikluc_TifWNTHRRdp9Xe9R5uhlROUaB7KE67DQ'
};
