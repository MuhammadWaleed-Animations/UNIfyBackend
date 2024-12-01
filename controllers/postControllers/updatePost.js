const Post = require('../models/postModel');

exports.updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const updates = req.body;

    const post = await Post.findByIdAndUpdate(postId, updates, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    return res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
