// dependencies
const express = require('express');
const authenticate = require('../middlewares/authenticate');
const controller = require('../controllers/mails'); 

// variable 
const router = express.Router();

router.post('/post', authenticate,controller.postMail); // TO create a mail

router.get('/sent', authenticate, controller.getSentMails); // to get all sent mails

router.get('/received', authenticate, controller.getReceivedMails); // to get all received mails


module.exports = router; // export router
