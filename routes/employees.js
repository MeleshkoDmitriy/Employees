const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {   all, add, remove, edit, employee, } = require('../controllers/employees');

router.get('/', auth, all)
router.get('/:id', auth, employee)
router.post('/', auth, add)
router.delete('/:id', auth, remove)
router.put('/:id', auth, edit)

module.exports = router;