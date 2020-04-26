const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

require('dotenv/config');

exports.checkUser = async (req, res, next) => {
    console.log("inside check user");
    try {
        user = await User.find({ user: req.query.user });
        if (user.length >= 1) {
            console.log("sending 200");
            res.status(200).json();
        }
        else {
            console.log("Sending 404");
            res.status(404).json();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json();
    }
}

exports.userSignUP = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json();
            return;
        }
        else {
            const number = Number(req.body.no);
            const dob = new Date(req.body.dob);
            const user = new User({
                user: req.body.user,
                firstName: req.body.fname,
                lastName: req.body.lname,
                password: hash,
                dob: dob,
                mobile: number,
                twoFA: req.body.tfa
            });
            user.save().then(result => {
                res.status(201).json();
            }).catch(err => {
                res.status(500).json();
            });
        }
    });
}

exports.userLogin = async (req, res, next) => {
    try {
        user = await User.find({ user: req.body.user });
        if (user.length == 0) {
            res.status(401).json({
                message: 'Authentication Failed'
            });
            return;
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                res.status(500).json({});
            } else if (result) {
                const token = jwt.sign({ user: user[0].user }, process.env.KEY, { expiresIn: '1h' });
                res.status(200).json({
                    token: token
                });
            } else {
                res.status(401).json({
                    message: 'Authentication Failed'
                });
            }

        });
    } catch (err) {
        res.status(500).json({});
    }
}

exports.checkLogin = (req,res) => {
    res.status(200).json();
}
