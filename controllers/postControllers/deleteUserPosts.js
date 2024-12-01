const Post = require('../models/postModel');

exports.deleteUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    await Post.deleteMany({ userId });
    return res.status(200).json({ message: 'All posts from the user deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
