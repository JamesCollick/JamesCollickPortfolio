const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // Add this line to use environment variables

const app = express();
const port = 3001;

// Allow CORS for your front-end domain
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your front-end domain
}));

app.use(bodyParser.json());

app.post('/api/subscribe', async (req, res) => {
  const { email, name, subject } = req.body;

  try {
    const response = await axios.post(
      `https://us11.api.mailchimp.com/3.0/lists/45a7156513/members`,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          SUBJECT: subject,
        },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from('anystring:' + process.env.MAILCHIMP_API_KEY).toString('base64')}`, // Use environment variable for API key
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).send('Subscription successful');
  } catch (error) {
    console.log(error);
    res.status(500).send('Subscription failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});