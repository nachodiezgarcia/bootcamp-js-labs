/*
Titulo
color: red; font-size: 16px; font-style: strong;
*/
const pop = "🎵 Pop Rock"
const rock = "🎸 Rock"
const hardRock = "🤘 Hard Rock"
const clásica = "🎼 Clásica"

const titleStyle= "color: red; font-size: 16px; font-style: strong;";
const grupo1s= "console.log(`%c${grupo1.nombre} / ${grupo1.año}/${grupo1.activo}/${grupo1.tipoDeMusica}`,  titleStyle);";

interface Musical{
    nombre: string,
    año: number,
    activo: boolean,
    tipoDeMusica: string,
};

const grupo1: Musical= {
    nombre: "The Beatles",
    año: 1906,
    activo: true,
    tipoDeMusica: `${pop}`,
};

const  grupo2: Musical= {
    nombre:"Queen",
    año:1970,
    activo: false,
    tipoDeMusica: `${rock}`

};

const grupo3: Musical= {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    tipoDeMusica: `${hardRock}`,
};

const grupo4: Musical= {
    nombre: "Ludiwing van Veethoven",
    año: 1770,
    activo: false,
    tipoDeMusica: `${clásica}`,
};

const grupo5: Musical= {
    nombre: "The Rolling Stones",
    año: 1970,
    activo: true,
    tipoDeMusica: `${rock}`,
};

console.log(`%c${grupo1.nombre} / ${grupo1.año} / ${grupo1.activo} / ${grupo1.tipoDeMusica}`,  titleStyle);

console.log(`%c${grupo2.nombre} / ${grupo2.año} / ${grupo2.activo} / ${grupo2.tipoDeMusica}`,  titleStyle);

console.log(`%c${grupo3.nombre} / ${grupo3.año} / ${grupo3.activo} / ${grupo3.tipoDeMusica}`,  titleStyle);

console.log(`%c${grupo4.nombre} / ${grupo4.año} / ${grupo4.activo} / ${grupo4.tipoDeMusica}`,  titleStyle);

console.log(`%c${grupo5.nombre} / ${grupo5.año} / ${grupo5.activo} / ${grupo5.tipoDeMusica}`,  titleStyle);