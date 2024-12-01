const express = require('express');
const { createAdmin } = require('../controllers/adminControllers/addNewAdmin');
const { getAllAdmins } = require('../controllers/adminControllers/getAllAdmin');
const adminMiddleware = require('../../UnifyGlitch/middleware/adminMiddleware');

const router = express.Router();

// Create Admin (Restricted to existing admins)
router.post('/add', adminMiddleware.verifyAdmin, createAdmin);

// Get All Admins (Restricted to existing admins)
router.get('/list', adminMiddleware.verifyAdmin, getAllAdmins);

module.exports = router;



