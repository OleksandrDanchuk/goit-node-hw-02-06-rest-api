const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const validateBody = require('../../middlewars/validateBody');
const { addSchema, updateFavoriteSchema } = require('../../schemas/contacts');
const isValidId = require('../../middlewars/isValidId');
const validateFavoriteBody = require('../../middlewars/validateFavoriteBody');

router.get('/', ctrl.listContacts);

router.get('/:contactId', isValidId, ctrl.getContactById);

router.post('/', validateBody(addSchema), ctrl.addContact);

router.delete('/:contactId', isValidId, ctrl.removeContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateFavoriteBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
