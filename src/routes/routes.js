const express = require('express')
const router = express.Router()
const userController =   require('../controller/user.controller');

// Get all users
router.get('/', userController.findAll);

// Retrieve a single user with id
router.get('/:id', userController.findById);

// Create a new user
router.post('/', userController.create);

// Update a user with id
router.put('/:id', userController.update);

// Delete a user with id
router.delete('/:id', userController.delete);

module.exports = router