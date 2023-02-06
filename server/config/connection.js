const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://evan:evan@cluster0.j1ywuu8.mongodb.net/test  ', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
