const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/nearby', async (req, res) => {
  const { lat, lng } = req.query;
  const apiKey = process.env.REACT_APP_PLACE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching places: ', error);
    res.status(500).send('Error fetching places');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});