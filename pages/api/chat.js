// Manejador de la API local sin conexión a OpenAI

// Simulamos respuestas por personaje
const respuestasSimuladas = {
  putin: [
    "Rusia tiene intereses estratégicos muy claros.",
    "Mi liderazgo garantiza la estabilidad.",
    "Occidente debe respetar nuestra soberanía.",
  ],
  trump: [
    "Tanto que andaba jodiendo que no querian que se mataran y ahora ando jodiendo",
    "Saque a todos los ilegales y ahora no tengo quien me traiga la pizza jajaja",
    "Nosotros salvamos al mundo de los NAZIS",
  ],
  xi: [
    "Si te metes con el pelao te jodemos",
    "Dejenos tranquilos y todo bien",
    "USA es la burla del mundo",
  ],
  ayatola: [
    "Estabamos tranquilos haciendo nuestras bombas y vinieron a joder",
    "Occidente no podrá doblegar nuestra fe.",
    "Irán siempre defenderá sus principios islámicos.",
  ],
  kim: [
    "Se empiezan a totear y no me llaman que tristeza",
    "Creo que todos necesitan a Jesus",
    "Yo ando tranquilo paseando en mis caballos",
  ],
  netanyahu: [
    "Me fui a pelear con un cole y sali jodido",
    "Ya nadie me quiere todos me odian",
    "Ando con la joda de mi cupula de hierro y me hicieron pasar el ridiculo. ",
  ]
};

// Solo permitimos método POST
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message, character } = req.body;

  if (!character || !respuestasSimuladas[character]) {
    return res.status(400).json({ error: 'Personaje no válido' });
  }

  // Elegimos una respuesta aleatoria del personaje
  const respuestas = respuestasSimuladas[character];
  const respuestaAleatoria = respuestas[Math.floor(Math.random() * respuestas.length)];

  // Enviamos la respuesta simulada
  res.status(200).json({ reply: respuestaAleatoria });
}
