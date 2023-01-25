const express = require('express');
const router = express.Router();

// importing multer upload
const upload = require('../config/multer');

const PictureController = require('../controllers/pictureController');

// the upload goes as an intermediate method between access and creation
router.post('/', upload.single('file'), PictureController.create);

module.exports = router;