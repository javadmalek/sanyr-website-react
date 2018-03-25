const mongoose = require('mongoose');
const config = require('../config/database');
const express = require('express');

const router = express.Router();

const SignupRequest = require('../models/sanyred/signup_request');

router.post('/users/signup-request', (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.company || !req.body.role || !req.body.phone) {
        res.json({ success: false, msg: 'NotSaved: Please fill the SignUp form completely.' });
    } else {
        const signupRequest = new SignupRequest({
            name:     req.body.name,
            email:    req.body.email,
            company:  req.body.company,
            role:    req.body.role,
            phone:   req.body.phone,
        });
        signupRequest.save((err) => {
            if (err) {
                return res.json({ success: false, msg: 'Sign up request failed.', error: err });
            }
            return res.json({ success: true, msg: 'Successful sing up request saved.' });
        });
    }
});

module.exports = router;
