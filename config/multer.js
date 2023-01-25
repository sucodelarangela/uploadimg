// using multer for image upload
const multer = require('multer');

// node package for easier access to folder path in the project
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    // The filename will be saved as the current date to avoid same name. path.extname allows to use the same extension from the original file to the uploaded file
    callback(null, Date.now() + path.extname(file.originalname));
  }
});

// involing multer with storage as argument
const upload = multer({ storage });

// exporting to use upload in routes
module.exports = upload;