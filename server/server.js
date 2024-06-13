const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const technicianRoutes = require('./routes/technicianRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/technicians', technicianRoutes);
app.use('/api/reports', reportRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
