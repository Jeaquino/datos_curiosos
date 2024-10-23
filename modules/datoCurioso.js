const datos = [
  "Los flamencos sólo pueden comer con la cabeza boca abajo",
  "Las personas son, en promedio, unos 6 milímetros más altas por la mañana que por la noche",
  "Las abejas pueden reconocer rostros humanos",
  "La miel nunca se echa a perder, Se han encontrado frascos en tumbas de más de 3000 años y aún son comestibles",
  "En Venus, un día es más largo que un año",
  "Los koalas tienen huellas dactilares casi idénticas a las de los humanos",
  "El corazón de un camarón está en su cabeza",
  "Las ostras pueden cambiar de género varias veces a lo largo de su vida",
  "La voz de Mickey Mouse y Minnie Mouse fueron interpretadas por un matrimonio en la vida real",
  "Los tiburones han existido por más tiempo que los árboles",
];

const brindarDatoCurioso = () => {
    const indice = Math.floor(Math.random() * (datos.length - 1));
    console.log(datos[indice]); 
}

module.exports = brindarDatoCurioso;