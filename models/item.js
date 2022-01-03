const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    amount: String,
    description: String,
    location: String
});

const item = mongoose.model('items', itemSchema);

module.exports = item;