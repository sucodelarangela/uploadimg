const Picture = require('../models/Picture');

exports.create = async (req, res) => {
  try {
    // name of the input on front end
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

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();

    res.json(pictures);
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching images.' });
  }
};