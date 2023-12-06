const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const {
  validateBody,
  validateFavoriteBody,
  isValidId,
  authenticate,
} = require('../../middlewars');
const { addSchema, updateFavoriteSchema } = require('../../schemas/contacts');
// const isValidId = require("../../middlewares/isValidId");
// const validateFavoriteBody = require("../../middlewares/validateFavoriteBody");

router.get('/', authenticate, ctrl.listContacts);

router.get('/:contactId', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(addSchema), ctrl.addContact);

router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateFavoriteBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
