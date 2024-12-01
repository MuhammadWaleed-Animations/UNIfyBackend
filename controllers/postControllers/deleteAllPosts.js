const Post = require('../models/postModel');

exports.deleteAllPosts = async (req, res) => {
  try {
    await Post.deleteMany();
    return res.status(200).json({ message: 'All posts deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
