const express = require('express')
const router = express.Router()
const {getThePerson, addThePerson, editThePerson, removeAPerson} = require('../controllers/personalInfoController')


router.route('/').post(addThePerson)
router.route('/:user_id').get(getThePerson).put(editThePerson).delete(removeAPerson)

module.exports = router