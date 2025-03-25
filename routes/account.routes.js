const express = require('express');
const {
  createAccount,
  getAccounts,
  getAccountById,
  getAccountTransactions,
  updateAccountStatus
} = require('../controllers/account.controller');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createAccount)
  .get(getAccounts);

router.route('/:id')
  .get(getAccountById)
  .put(authorize('admin'), updateAccountStatus);

router.get('/:id/transactions', getAccountTransactions);

module.exports = router; 