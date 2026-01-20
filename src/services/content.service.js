// Mock content service to simulate fetching data from a CMS or API

const CONTENT = {
  services: [
    {
      title: "Bienestar Integral",
      description: "Creemos en la importancia de abordar la salud física y mental de manera holística, promoviendo el equilibrio entre cuerpo y mente.",
    },
    {
      title: "Innovación Sostenible",
      description: "Buscamos constantemente maneras creativas y sostenibles de mejorar y evolucionar nuestra plataforma para brindar la mejor experiencia a nuestros usuarios.",
    },
    {
      title: "Colaboración y Comunidad",
      description: "Valoramos la colaboración, el apoyo mutuo y la creación de una comunidad positiva que motive y empodere a todos los participantes.",
    },
    {
      title: "Confidencialidad y Respeto",
      description: "Respetamos y protegemos la privacidad y confidencialidad de nuestros usuarios, garantizando un ambiente seguro y de confianza.",
    },
    {
      title: "Inclusión",
      description: "El programa esta diseñado para que todos puedan participar y tenemos la flexibilidad de adaptarlo a cualquier necesidad.",
    },
  ],
  who: {
    description: "Move4IA es una iniciativa que busca fomentar la actividad física y el bienestar en el entorno laboral y personal. A través de tecnología innovadora y un enfoque humano, ayudamos a las personas a mantenerse activas, saludables y conectadas.",
  }
};

const ContentService = {
  getServices: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: CONTENT.services });
      }, 500);
    });
  },
  getWhoContent: async () => {
     return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: CONTENT.who });
      }, 500);
    });
  }
};

export default ContentService;
