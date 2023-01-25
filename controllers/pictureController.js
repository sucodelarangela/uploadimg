const Picture = require('../models/Picture');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path
    });

    await picture.save();

    res.json({ picture, msg: 'Image successfully uploaded!' });
  } catch (error) {
    res.status(500).json({ message: 'Error when saving image.' });
  }
};