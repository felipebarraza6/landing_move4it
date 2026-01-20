import api from './api';

const ContactService = {
  sendMessage: async (data) => {
    // In a real app: return api.post('/contact', data);

    // Mocking response for now
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock API received:", data);
        resolve({
          data: {
            success: true,
            message: "Mensaje enviado con éxito"
          }
        });
      }, 1500);
    });
  }
};

export default ContactService;
