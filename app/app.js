const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/bookings', (req, res) => {
  res.json([
    {
      id: 1,
      studio: 'Studio A',
      date: '2026-10-25',
      time: '10:00 AM'
    }
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Studio-Booking running on port ${PORT}`);
});
