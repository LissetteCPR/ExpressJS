const data = require('../../test-data.json');

module.exports = (req, res) => {
  const userId = req.params.userId * 1;
  const name = data.users.find(n => n.id === userId);

  res.status(200).json({ name });
};
