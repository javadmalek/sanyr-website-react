const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const consultSchema = new Schema({
    _id:     Schema.Types.ObjectId,
    name: {
        type:     String,
        required: true,
    },
    email: {
        type:      String,
        lowercase: true,
        required:  true,
        validate:  function (email) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        },
    },
    company:  { type: String,  required: true },
    solution: { type: String,  required: true },
    message:  { type: String,  required: true },
});
consultSchema.plugin(timestamps);
module.exports = mongoose.model('Consult', consultSchema);
