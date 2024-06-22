import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

router.get('/paypal', (req, res) => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  if (clientId) {
    res.send(clientId);
  } else {
    res.status(500).send('PayPal Client ID not found.');
  }
});

export default router;
