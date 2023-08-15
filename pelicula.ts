import { Genero } from "./genero";
export class Pelicula {
    private nombre:string
    private director:string
    private generos:Genero[] = []
    private duracion:number
    private anio:number
    private calificacion:number
    constructor(nombre:string, director:string,generos:Genero[],duracion:number,anio:number,calificacion:number) {
        this.nombre = nombre;
        this.director = director;
        this.generos = generos
        this.duracion = duracion;
        this.anio = anio;
        this.calificacion = calificacion;
    }
public setNombre(nombre:string):void {
    this.nombre = nombre;
}
public setDirector(director:string):void {
    this.director = director;
}
public setGenero(generos:Genero[]):void {
    this.generos = generos;
}
public setDuracion(duracion:number):void {
    this.duracion = duracion;
}
public setAño(anio:number):void {
    this.anio = anio;
}
public setCalificacion(calificacion:number):void {
    this.calificacion = calificacion;
}
public getNombre():string{
    return this.nombre
}
public getDirector():string{
    return this.director
}
public getGenero():Genero[]{
    return this.generos
}
public getDuracion():number{
    return this.duracion
}
public getAño():number{
    return this.anio
}
public getCalificacion():number{
    return this.calificacion
}
/*ingresarGeneros(id:number, nombre:string):void{
        
    const nuevoGenero = new Genero(id, nombre);
    this.generos.push(nuevoGenero);
}*/
ingresarGeneros():void{
       
}
contargeneros():number{
    return this.generos.length
}
public imprimir():void{
    let impresion = {

    }
}

}

