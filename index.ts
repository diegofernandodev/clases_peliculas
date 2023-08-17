import { Genero } from "./genero";
import { Pelicula } from "./pelicula";

let alquilada:boolean = false

let listaPeliculas: Pelicula[] = []
let listaPeliculasAlquiladas: string[] = []
function agregarPeliculas(pelicula:Pelicula){
    listaPeliculas.push(pelicula)
    }

    function AlquilarPelicula(nombrePelicula: string): boolean {
        const peliculaBuscada = listaPeliculas.find(pelicula => pelicula.getNombre() === nombrePelicula);
    
        if (peliculaBuscada) {
            listaPeliculasAlquiladas.push(nombrePelicula); // Agregar la película alquilada a la lista
            return true; // Indicar que la película está alquilada
        } else {
            return false; // Indicar que la película no está alquilada
        }
    }
    

    
    function mostrarCarteleraDisponible(){
        console.log("------------------CARTELERA DE PELICULAS DISPONIBLES------------------");
        
        listaPeliculas.forEach(pelicula => {
            if (listaPeliculasAlquiladas.includes(pelicula.getNombre())) {
                console.log(`La Pelicula: ${pelicula.getNombre()} Esta alquilada ¡No disponible!`);
                
                
            } else {
                console.log(`La Pelicula: ${pelicula.getNombre()} Esta disponible para ser alquilada`);
                
            }
        });
    }

const accion = new Genero(1,"Accion");
const Ciencia_Ficcion = new Genero(2,"Ciencia ficcion");
const aventura = new Genero(3,"Aventura");
const terror = new Genero(4,"Terror");
const animada = new Genero(5,"Animada");
const heroes = new Genero(6,"SuperHeroes");
const suspenso = new Genero(7,"Suspenso");

const generos: Genero[] = [accion, Ciencia_Ficcion,aventura,terror,animada,heroes,suspenso]

const generoAvatar:Genero = generos[1]
const generoTerminator:Genero[] = [generos[0], generos[1]]
const generoAvengers:Genero[] = [generos[1], generos[5]]
const generoJhonWick:Genero[] = [generos[0], generos[2],generos[6]]

let pelicula1 = new Pelicula("Avatar","James Cameron",[generoAvatar],192,2022,10);
let pelicula2 = new Pelicula("Terminator","James Cameron",generoTerminator,108,1983,9);
let pelicula3 = new Pelicula("The Avengers","Joss Whedon",generoAvengers,181,2011,8);
let pelicula4 = new Pelicula("Jhon Wick","Chad Stahelski",generoJhonWick,101,2014,10);

pelicula1.imprimir()
console.log("--------------------------------------------------------------");

console.log(pelicula2.esSimilar("Terminator"))
console.log(pelicula3.calcularValoración())
console.log(pelicula4.esPeliculaEpica())

agregarPeliculas(pelicula1)
agregarPeliculas(pelicula2)
agregarPeliculas(pelicula3)
agregarPeliculas(pelicula4)

AlquilarPelicula("Avatar")
AlquilarPelicula("Terminator")

mostrarCarteleraDisponible()
