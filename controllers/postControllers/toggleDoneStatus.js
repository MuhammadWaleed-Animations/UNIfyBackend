const Post = require('../models/postModel');

exports.toggleDoneStatus = async (req, res) => {
  try {
    const { postId } = req.params;
    const { done } = req.body;

    const post = await Post.findByIdAndUpdate(postId, { done }, { new: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    return res.status(200).json({ message: `Post marked as ${done ? 'done' : 'undone'}`, post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
