const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'page1.html'));
    // res.send('<h1>This default route of assignment3</h1>')
});

router.get('/user', (req, res, next) => {
    // console.log(req.body);
    // res.redirect('/');
    res.sendFile(path.join(__dirname, '..', 'views', 'page2.html'));

});

module.exports = router;