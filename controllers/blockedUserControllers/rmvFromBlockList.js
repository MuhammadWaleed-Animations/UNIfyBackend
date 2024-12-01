const BlockedUser = require('../models/blockedUserModel');

// Remove User from Blocklist
exports.removeFromBlocklist = async (req, res) => {
  try {
    const { email } = req.body;

    const blockedUser = await BlockedUser.findOneAndDelete({ email });
    if (!blockedUser) {
      return res.status(404).json({ message: 'User not found in blocklist' });
    }

    return res.status(200).json({ message: 'User removed from blocklist' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
