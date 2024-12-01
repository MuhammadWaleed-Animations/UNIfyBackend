const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { username, email, password, profilePicture, contactInfo, organization } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already in use' });
    }

    const user = new User({
      username,
      email,
      password,
      contactInfo,
      profilePicture,
      organization,
    });

    await user.save();

    return res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
