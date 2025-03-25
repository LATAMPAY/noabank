const express = require('express');
const {
  createTransfer,
  getTransactions,
  updateTransactionStatus
} = require('../controllers/transaction.controller');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createTransfer)
  .get(authorize('admin'), getTransactions);

router.put('/:id/status', authorize('admin'), updateTransactionStatus);

module.exports = router; 