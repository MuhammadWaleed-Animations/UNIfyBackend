const express = require('express');
const router = express.Router();
const { addToBlocklist } = require('../controllers/blockedUserControllers/addToBlocklist');
const { removeFromBlocklist } = require('../controllers/blockedUserControllers/removeFromBlocklist');
const { getAllBlockedUsers } = require('../controllers/blockedUserControllers/getAllBlockedUsers');
const adminMiddleware = require('../../UnifyGlitch/middleware/adminMiddleware');
// Route to add a user to blocklist
router.post('/add', adminMiddleware.verifyAdmin, addToBlocklist);

// Route to remove a user from blocklist
router.delete('/remove', adminMiddleware.verifyAdmin, removeFromBlocklist);

// Route to get all blocked users
router.get('/list', adminMiddleware.verifyAdmin, getAllBlockedUsers);

module.exports = router;
