
const Joi = require('joi');
const express = require('express');
const router = express.Router();

const usersList = [{ id: 1, name: "Amit Dror" }, { id: 2, name: "David Tsap" }, { id: 3, name: "Tal Mizrahi" }, { id: 4, name: "Sigal Mizrahi" }];

// Say hello
router.get('/hello', (req, res) => {
    res.send('Hello From Users...');
});
// Get all users
router.get('/', (req, res) => {
    res.send(usersList);
});
    
// Get user by id
router.get('/:id', (req, res) => {
    const user = usersList.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID not found.');;
    res.send(user);
});

// Add new user
router.post('/', (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = {
        id: usersList.length + 1,
        name: req.body.name
    };
    usersList.push(user);
    res.send(user);
});
// Update user
router.put('/:id', (req, res) => {
    console.log(parseInt(req.params.id));
    const user = usersList.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID not found.');
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    user.name = req.body.name;
    res.send(user);
});
// Delete user
router.delete('/:id', (req, res) => {
    const user = usersList.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID not found.');
    const userIndex = usersList.indexOf(user);
    usersList.splice(userIndex, 1);
    res.send(user);
});

// Validation Functions
function validate(user) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(user, schema);
}

module.exports = router;