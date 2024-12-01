const Admin = require('../models/adminModel');

// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().populate('user');

    return res.status(200).json({ admins });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
