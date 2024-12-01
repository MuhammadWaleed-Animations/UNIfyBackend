const Post = require('../models/postModel');

exports.getPostsByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const posts = await Post.find({ category }).populate('userId', 'username profilePicture email');
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
