const Post = require('../models/postModel');

exports.addPost = async (req, res) => {
  try {
    const { title, description, contactInfo, time, memberCount, category, location, userId } = req.body;

    const post = new Post({ title, description, contactInfo, time, memberCount, category, location, userId });
    await post.save();

    return res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
