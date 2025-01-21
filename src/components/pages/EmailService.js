import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  // Log all environment variables to the console
  console.log('Environment Variables:', process.env);

  return emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID from .env
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID // User ID from .env
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      return { success: true };
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      return { success: false, message: error.text };
    });
};

export default sendEmail;
