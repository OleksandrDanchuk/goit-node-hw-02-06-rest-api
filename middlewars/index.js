const isValidId = require('./isValidId');
const validateBody = require('./validateBody');
const validateFavoriteBody = require('./validateFavoriteBody');
const validateEmailBody = require('./validateEmailBody');
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
  isValidId,
  validateBody,
  validateFavoriteBody,
  validateEmailBody,
  authenticate,
  upload,
};
