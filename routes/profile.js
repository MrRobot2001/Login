const router = require('express').Router()
const auth = require('../middleware/auth')
const profileCtrl = require('../controllers/profile')

router.post('/save', auth ,profileCtrl.save)
router.get('/profiles', auth ,profileCtrl.getProfiles)
router.delete('/deleteprofile/:id', auth ,profileCtrl.deleteProfiles)

module.exports = router