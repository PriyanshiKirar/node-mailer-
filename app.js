const express = require("express");
const app = express();

const sendEmail = require('./email'); // Declare once

// Route to send email
app.get('/send-email', async (req, res) => {
  try {
    await sendEmail(
      'asthap602@gmail.com',
      'Test Email Subject',
      'This is a test email sent with Nodemailer using OAuth2.',
      '<p>This is a test email sent  <b>Nodemailer</b> using OAuth2.</p>'
    );
    res.send('Email sent successfully!');
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
