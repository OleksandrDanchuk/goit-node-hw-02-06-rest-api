const HttpError = require('../utils/HttpError');

const validateFavoriteBody = shema => {
  const checkValidate = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, 'missing field favorite'));
      return;
    }

    const { error } = shema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return checkValidate;
};

module.exports = validateFavoriteBody;
