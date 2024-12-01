const express = require('express');
const { addPost } = require('../controllers/postControllers/addPost');
const { deleteAllPosts } = require('../controllers/postControllers/deleteAllPosts');
const { deletePost } = require('../controllers/postControllers/deletePost');
const { deleteUserPosts } = require('../controllers/postControllers/deleteUserPosts');
const { getAllPosts } = require('../controllers/postControllers/getAllPosts');
const { getOwnPosts } = require('../controllers/postControllers/getOwnPosts');
const { getPostsByCategory } = require('../controllers/postControllers/getPostsByCategory');
const { getReportedPosts } = require('../controllers/postControllers/getReportedPosts');
const { reportPost } = require('../controllers/postControllers/reportPost');
const { toggleDoneStatus } = require('../controllers/postControllers/toggleDoneStatus');
const { updatePost } = require('../controllers/postControllers/updatePost');
const { unreportPost } = require('../controllers/postControllers/unreportPost');

const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

// Existing Routes
router.get('/all',getAllPosts);
router.put('/:postId/report',reportPost);
router.put('/:postId/done',toggleDoneStatus);
router.delete('/user/:userId',deleteUserPosts);
router.delete('/:postId',deletePost);
router.put('/:postId',updatePost);
router.post('/',addPost);
router.delete('/',deleteAllPosts);
router.get('/category',getPostsByCategory);
router.get('/user/:userId',getOwnPosts);

// New Admin Routes
router.get('/reported', adminMiddleware.verifyAdmin,getReportedPosts); // Admin Only
router.put('/:postId/unreport', adminMiddleware.verifyAdmin,unreportPost); // Admin Only

module.exports = router;

