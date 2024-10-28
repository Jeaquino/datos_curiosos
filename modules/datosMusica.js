const datosMusica = [
  // curiosidades sobre la música
"Escuchar música es una de las pocas actividades que implican el uso de todas las partes de nuestro cerebro.",
"Al escuchar música, tu corazón modifica sus latidos para intentar imitar el ritmo de la música que escuchas.",
"Tener todo el día una canción sonando en nuestra cabeza y no poder pararla se conoce como “gusano musical”.",
"Al escuchar rock o pop nuestra resistencia física puede aumentar un 15%.",
"Cuando escuchamos música se libera dopamina en nuestro cerebro, como cuando tomas drogas, practicas sexo o comes.",
"La música puede ayudarnos en los procesos de razonamiento y mejora notablemente las áreas motoras de nuestro cerebro. Por eso se cree que la música surgió para 'ayudarnos a todos a movernos juntos'.",
"Hay investigaciones que han demostrado que lo que sentimos cuando escuchamos una canción es muy similar a lo que el resto de la gente en el mismo lugar está experimentando. (¡De ahí viene que hagamos tantos amigos en los conciertos!).",
"La música escuchada se guarda en áreas del cerebro diferentes a las de los recuerdos, por eso las personas con Alzheimer son capaces de recordar melodías de su pasado.",
"Escuchar música alta puede provocar que bebamos bebidas más rápidamente en menos tiempo. Ahora entendemos por qué la música está tan alta en las discotecas.",
"Tocar algún instrumento musical puede mejorar la comunicación verbal.",
"Las flores pueden crecer más rápido si hay música a su alrededor.",
"El tipo de música que nos gusta a la edad de 20 años suele ser el tipo de música que nos gustará el resto de nuestra vida.",
"Los bebés aprenden antes el significado de las emociones de la música antes que el significado de las palabras.",
"La forma en la que concebimos el mundo se ve condicionada por el tipo de música que escuchamos.",
"Y para terminar…. Al descargar la cisterna del wc, en la mayoría de los inodoros, da un Mi bemol."
];

const conocerDatoCurioso = () => {
  const indice = Math.floor(Math.random() * (datosMusica.length - 1));
  console.log(datosMusica[indice]); 
}

module.exports = conocerDatoCurioso;

conocerDatoCurioso();
