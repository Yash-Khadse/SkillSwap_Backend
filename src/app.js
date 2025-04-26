const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');
const matchRoutes = require('./routes/match.routes');
const messageRoutes = require('./routes/message.routes');
const adminRoutes = require('./routes/admin.routes');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/matching', matchRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorHandler);

module.exports = app;