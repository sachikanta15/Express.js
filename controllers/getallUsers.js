const User= require('../models/user')
const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({
      success: true,
      users: users,
    });
  };
  
  module.exports = getAllUsers;
  