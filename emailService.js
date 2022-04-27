const sgMail = require('@sendgrid/mail')
const adminEmail = ' '
const fromEmail = 'no-reply-smelly-cat@mail.easydev.gr'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendContactFormSubmissionEmail = (body) => {
    sgMail.send({
        to: body.email,
        from: fromEmail,
        subject: 'Smelly Cat Contact Form Submission ',
        text: `Hi, ${body.name} . Thank you for getting in touch! 
        We appreciate you contacting us. 
        One of our colleagues will get back in touch with you soon!
        Have a great day!
        
        Full Name: ${body.name}
        Email: ${body.email}
        Address: ${body.city} ${body.postalCode} ${body.address}
        Message: ${body.message}`
    })
}

const sendNewContactFormSubmissionAdmin = (body) => {
    sgMail.send({
        to: adminEmail,
        from: fromEmail,
        subject: 'New Form Submission',
        text: ` SmellyCat Contact Us Form.
        Full Name: ${body.name}
        Email: ${body.email}
        Address: ${body.city} ${body.postalCode} ${body.address}
        Message: ${body.message}`
    })
}


module.exports = {
    sendContactFormSubmissionEmail,
    sendNewContactFormSubmissionAdmin
}