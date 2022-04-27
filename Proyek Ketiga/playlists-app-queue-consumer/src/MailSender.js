const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
      this._transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        secure: false,
        auth: {
          user: process.env.MAIL_ADDRESS,
          pass: process.env.MAIL_PASSWORD,
        },
      });
    }

    sendEmail(targetEmail, content) {
        const message = {
            from: 'Playlists Apps',
            to: targetEmail,
            subject: 'Ekspor Playlist',
            text: 'Terlampir hasil dari ekspor playlist',
            attachment: [
                {
                    filename: 'playlist.json',
                    content,
                },
            ],
        };

        return this._transporter.sendMail(message);
    }
  }

module.exports = MailSender;