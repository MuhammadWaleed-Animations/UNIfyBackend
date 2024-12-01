const Post = require('../models/postModel');

exports.getReportedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ reported: true })
      .populate('userId', 'username profilePicture email')
      .lean();

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
