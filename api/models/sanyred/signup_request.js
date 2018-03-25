const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const SignupRequestSchema = new Schema({
    _id:     Schema.Types.ObjectId,
    name:    { type: String, required: true },
    role:    { type: String, required: true },
    company: { type: String, required: true },
    email:   {
        type:      String,
        lowercase: true,
        required:  true,
        validate:  function (email) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        },
    },
    phone:          { type: String, required: true },
    activationLink: {
        type:     String,
        required: true,
        default:  'SENT', // { 'SENT', 'CLICKED'
    },

    userId:   { type: Schema.Types.ObjectId, ref: 'User' },
});

SignupRequestSchema.plugin(timestamps);
module.exports = mongoose.model('SignupRequest', SignupRequestSchema);
