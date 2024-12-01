const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    const { organization } = req.query;
    const posts = await Post.find({ reported: false, done: false })
      .populate({
        path: 'userId',
        select: 'username profilePicture email',
        match: { organization },
      })
      .lean();

    const filteredPosts = posts.filter(post => post.userId !== null);
    return res.status(200).json(filteredPosts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
