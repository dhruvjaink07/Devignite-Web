const router = require("express").Router()
const { register, login, logout, profile, getProfileImg, updateProfilepic,upload } = require('../controllers/auth')
const auth = require('../middleware/auth')

router.post('/register',register)
router.post('/login',login)
router.post('/logout',auth,logout)
router.get('/me',auth,profile)
router.get('/avatar/:id',getProfileImg)
router.post('/avatar',auth,upload.single('profileimg'),updateProfilepic)

module.exports = router