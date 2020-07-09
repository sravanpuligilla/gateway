const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    dispalyMessage: String,
});

module.exports = mongoose.model('Messages', messageSchema);