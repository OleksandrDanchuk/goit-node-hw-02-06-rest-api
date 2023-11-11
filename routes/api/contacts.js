const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({ message: 'staaart' });
});

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'staaart' });
});

router.post('/', async (req, res, next) => {
  res.json({ message: 'staaart' });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'staaart' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
