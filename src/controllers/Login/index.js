const User = require("../../models/User");

const LoginController = {
  async createSession(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email, password });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};

module.exports = LoginController;
