require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createServer } = require('http');
const { Server } = require('socket.io');

// Import routes
const authRoutes = require('./routes/auth');
const marketRoutes = require('./routes/market');
const weatherRoutes = require('./routes/weather');
const forumRoutes = require('./routes/forum');
const expertRoutes = require('./routes/expert');
const schemeRoutes = require('./routes/schemes');
const marketplaceRoutes = require('./routes/marketplace');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/expert', expertRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/marketplace', marketplaceRoutes);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join_room', (room) => {
    socket.join(room);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kisan-helper')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
