const multer = require('multer');
const crypto = require('crypto')
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      const hash = crypto.randomBytes(5).toString('hex')

      cb(null, `${hash}${ext}`);
    },
  }),
}