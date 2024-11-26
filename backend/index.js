const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const { handleErrors } = require('./middleware/errorMiddleware')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)
app.use(handleErrors)

const PORT = 80
app.listen(PORT, function() {
    console.log('Server is running on http://localhost:80')
})