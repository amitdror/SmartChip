
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get Valid Actions   --> /api/actions GET
//router.get('/', (req, res) => {
    
// });

// const categorys = ['global', 'internal'];
// const actions = ['Call Someone', 'Send Message', 'Open Web Page', 'Set Alarm Clock', 'Set Timer'];


// {
//     "category":string,
//     "action": string
// }

module.exports = router;