const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/foodfinger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;