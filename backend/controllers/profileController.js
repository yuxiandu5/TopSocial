const axios = require('axios')

const getProfile = async (req, res, next) => {
    try {
        const url = 'http://localhost:8000/profile'
        const profile = await axios.get(url)
        res.status(200).json({
            message : 'Get profile succeed',
            data : profile.data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getProfile}