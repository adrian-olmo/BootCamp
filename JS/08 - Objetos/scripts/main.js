let edad = prompt('Que edad tienes');
const peliculas = [
    { pelicula: 'Rey Leon', edadApto: 3 },
    { pelicula: 'A todo Gas', edadApto: 8 },
    { pelicula: 'Soy Leyenda', edadApto: 13 },
    { pelicula: 'La marca del demonio', edadApto: 18 }

];

function listadoPeliculas(edad, peliculas) {

    let listadoApto = [];

    for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].edadApto <= edad)
            listadoApto.push(peliculas[i].pelicula)

    }

    return listadoApto;
}
console.log(listadoPeliculas(edad, peliculas));