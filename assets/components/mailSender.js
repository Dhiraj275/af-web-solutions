const nodemailer = require('nodemailer');
const {google} = require('googleapis')

const CLIENT_ID = '216281356195-7lgdp62ssdrem1tqj81smh1vers4m5hd.apps.googleusercontent.com'
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//0468ynuVZUV4ICgYIARAAGAQSNwF-L9IrfxcA3EiWoPugaNpM_ZOpO1m5s2xerKg3HLNR_msrOUZx2UF57EqsLLs6ydsVZNPPrE0';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REDIRECT_URI});

async function SendMail (reciver, subject, html, text ){
    try{
        const accessToken  = oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                type: 'OAuth2',
                user: 'itisfake707@gmail.com', 
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const mailOptions = {
            from: 'itisfake707@gmail.com📧Cover All Web Solution',
            to: reciver,
            subject: subject,
            text: text,
            html: html
        }
        const result = await transport.sendMail(mailOptions)
        return result
    }catch(error){
        console.error(error);
    }
}

export default SendMail