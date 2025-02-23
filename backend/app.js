const express = require('express');
const connectDB = require('./database/connection');
const roomRoutes = require('./routes/roomRoutes');
const visitorRoutes = require('./routes/visitor');
const cors = require('cors');

const app = express();
connectDB();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173', 'https://unstop-assessment-frontend-eight.vercel.app', 'https://unstop-assessment-frontend-ronrana24s-projects.vercel.app'] }));
app.use('/api/rooms', roomRoutes);
app.use("/api/visitor", visitorRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
