const router = require('express').Router()
const auth = require('../middleware/auth')
const {saveUserInterest, getUserInterest} = require('../controllers/user')


router.post('/interests',auth,saveUserInterest)
router.get('/interests',auth,getUserInterest)

module.exports = router