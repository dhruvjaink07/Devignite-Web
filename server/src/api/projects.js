const router = require('express').Router()
const auth = require('../middleware/auth')
const {saveMessage} = require('../controllers/projects')

router.post('/discussion/:id',auth,saveMessage)

module.exports = router