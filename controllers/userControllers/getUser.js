const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user.toObject());
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
