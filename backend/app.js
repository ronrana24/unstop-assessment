const express = require('express');
const connectDB = require('./database/connection');
const roomRoutes = require('./routes/roomRoutes');
const cors = require('cors');

const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api/rooms', roomRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
