const Post = require('../models/postModel');

exports.reportPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByIdAndUpdate(postId, { reported: true }, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    return res.status(200).json({ message: 'Post reported successfully', post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
