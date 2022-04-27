const express = require('express');
const cors = require('cors');
const { sendNewContactFormSubmissionAdmin, sendContactFormSubmissionEmail } = require('./emailService')

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());



app.post('/send', async(req, res) => {

    try {
        await sendNewContactFormSubmissionAdmin(req.body)
        await sendContactFormSubmissionEmail(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(500).send()
    }

})


app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})