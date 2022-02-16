__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/anjay/index.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/anjay/index.html')
})

module.exports = router
