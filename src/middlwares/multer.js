const multer = require('multer');
const upload = multer({ dest: 'public/image/produtos' });

module.exports = {
  upload
}
