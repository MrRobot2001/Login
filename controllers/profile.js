const Profiles = require('../models/profile');
const profileCtrl = {
    save:  async (req, res) => {
        try {
            const { address,username,email,mobile } = req.body;
            let newUsername = username.toLowerCase().replace(/ /g, '')
            const user_name = await Profiles.findOne({username: newUsername})
            if(user_name) return res.status(400).json({msg:"This username already exists"})

            const user_email = await Profiles.findOne({email})
            if(user_email) return res.status(400).json({msg:"This email already exists"})

            const mobile_number = await Profiles.findOne({mobile})
            if(mobile_number) return res.status(400).json({msg:"This mobile number already exists"})

            const newProfile = new Profiles({
                email,username:newUsername,mobile,address,user:req.user._id
            })
            await newProfile.save()
            
            res.json({
                msg:"User added successfully",
                profile: {
                    ...newProfile._doc,
                    user: req.user
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    getProfiles: async(req, res) => {
        try {
            const profiles = await Profiles.find({
                user: req.user._id
            }).sort('-createdAt')

            res.json({
                msg: 'Success!',
                profiles
            })
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    deleteProfiles: async(req, res) => {
        try {
            const profile = await Profiles.findOneAndDelete({_id: req.params.id, user: req.user._id})

            res.json({ msg: 'Profile Deleted!', 
            newProfile : {
                ...profile,
                user:req.user
            }})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
}


module.exports = profileCtrl;