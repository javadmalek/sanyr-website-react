const mongoose = require('mongoose');
const config = require('../config/database');
const express = require('express');

const router = express.Router();

const Consult = require('../models/sanyr_consult');

router.post('/send-consult', (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.company || !req.body.solution || !req.body.message) {
        res.json({ success: false, msg: 'NotSaved: Please fill the consult form completely.' });
    } else {
        const consult = new Consult({
            name:     req.body.name,
            email:    req.body.email,
            company:  req.body.company,
            solution: req.body.solution,
            message:  req.body.message,
        });
        consult.save((err) => {
            if (err) {
                return res.json({ success: false, msg: 'Save consult failed.', error: err });
            }
            return res.json({ success: true, msg: 'Successful Saved new consult.' });
        });
    }
});

module.exports = router;
