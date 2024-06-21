import {Libro} from "./libro";

class pilaLibros{
    libros:Libro[];

    constructor(){
        this.libros=[];
    }

    //mostra pila de libros
    listBook(): void{
        if(this.libros.length===0){
            console.log('La pila de libros esta vacia');
        } else {
            console.log('libros en la pila de libros');
            this.libros.forEach(libro=> {
                console.log("-Titulo: "+  (libro.titulo) +   " Autor: " +   (libro.autor) 
            + " Genero: " + (libro.genero) + " Idioma: " + (libro.idioma) + " Precio: " + (libro.precio) 
            + " Formato: " + (libro.formato) + " ISBN: " + (libro.isbn) + " Descripcion: " + (libro.descripcion) 
            + " Estado: " + (libro.estado) + " Ubicacion:" + (libro.ubicacion) + " Fecha de publicacion: " + (libro.fecha_publicacion)
            + " Editorial: " + (libro.editorial) + "Paginas: " + (libro.paginas) + " Dimensiones: "  + (libro.dimensiones)
                + " Peso: "  + (libro.peso)+ " Disponible: "  + (libro.disponible)) ;
                
            })
        }
    }

    //agregar libro
    // addBook(Libro:)
}