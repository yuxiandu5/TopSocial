const axios = require('axios')

const getRequest = async (req, res, next) => {
    try {
        const url = 'http://localhost:8000/request'
        const response = await axios.get(url)
        res.status(200).json({
            msg : 'Get request succeed',
            data : response.data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getRequest}