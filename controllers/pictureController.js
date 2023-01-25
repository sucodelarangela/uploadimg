const Picture = require('../models/Picture');

// node package to work with files (fs = file system)
const fs = require('fs');

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

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: 'Image not found.' });
    }

    // removing the file
    fs.unlinkSync(picture.src);

    // remove the data from db
    await picture.remove();

    res.json({ message: 'Image successfully deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Error when deleting image' });
  }
};