const axios = require('axios');
const Mail = require('../models/mail');

exports.postMail = async (req, res, next) => {
    const sender = req.decodedToken.user;
    console.log("Inside postMail");
    const message = req.body.subject + " " + req.body.body; 
    const data = JSON.stringify({
        message: message
    })
    const options = {
        url: 'http://localhost:9000/api/classify',
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=UTF-8'
        },
        data: data
    }
    try {
        const response = await axios(options);
        category = response.data.category;
        const mail = new Mail({
            sender: sender,
            receiver: req.body.receiver,
            timeSent: new Date(),
            subject: req.body.subject,
            body: req.body.body,
            category: category
        });
        await mail.save();
        res.status(201).json();
    } catch (err) {
        res.status(500).json({});
    }
}

exports.getSentMails = async (req, res, next) => {
    const sender = req.decodedToken.user;

    try {
        const mails = await Mail.find({ sender: sender });

        if (mails.length >= 1) {
            res.status(200).json(mails);
        } else {
            res.status(200).json({});
        }
    } catch(err){
        res.status(500).json();
    } 
}

exports.getReceivedMails = async (req, res, next) => {
    const category = req.query.category;
    const receiver = req.decodedToken.user;
    try {
        const mails = await Mail.find({ receiver: receiver, category: category });
        if (mails.length >= 1) {
            res.status(200).json(mails);
        } else {
            res.status(200).json({});
        }
    } catch(err){
        return res.status(500).json();
    } 
}
