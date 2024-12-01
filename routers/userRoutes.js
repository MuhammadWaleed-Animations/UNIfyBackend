const express = require('express');
const { login } = require('../controllers/userControllers/login');
const { createUser } = require('../controllers/userControllers/createUser');
const { updateUser } = require('../controllers/userControllers/updateUser');
const { getUser } = require('../controllers/userControllers/getUser');
const { deleteUser } = require('../controllers/userControllers/deleteUser');
const upload = require('../../UnifyGlitch/middleware/upload');

const router = express.Router();

// Create a User with Profile Picture
router.post('/', upload.single('profilePicture'),createUser);

// Update User (including profile picture)
router.put('/:userId', upload.single('profilePicture'),updateUser);

// Login Route
router.get('/login',login);

// Other routes
router.get('/:userId',getUser);
router.delete('/:userId',deleteUser);

module.exports = router;
