import {Book} from "./libro";

export class pilaLibros{
    books:Book[];

    constructor(){
        this.books=[];
    }

    //mostrar pila de libros
    listBooks():void{
        if(this.books.length === 0){
            console.log("La pila de libros se encuentra vacia.");
        } else {
            console.log("La pila de libros");
            this.books.forEach(book=>{
                console.log(" Titulo: "+  (book.titulo) +   " Autor: " +   (book.autor) 
                + " Genero: " + (book.genero) + " Idioma: " + (book.idioma) + " Precio: " + (book.precio) 
                + " Formato: " + (book.formato) + " ISBN: " + (book.isbn) + " Descripcion: " + (book.descripcion) 
                + " Estado: " + (book.estado) + " Ubicacion:" + (book.ubicacion) + " Fecha de publicacion: " + (book.fecha_publicacion)
                + " Editorial: " + (book.editorial) + "Paginas: " + (book.paginas) + " Dimensiones: "  + (book.dimensiones)
                + " Peso: "  + (book.peso)+ " Disponible: "  + (book.disponible)) ;
            })
        }
    }

    //agregar un libro
    addBook(book:Book):void{
        this.books.push(book);
        console.log(" Titulo: "+  (book.titulo) +   " Autor: " +   (book.autor) 
            + " Genero: " + (book.genero) + " Idioma: " + (book.idioma) + " Precio: " + (book.precio) 
            + " Formato: " + (book.formato) + " ISBN: " + (book.isbn) + " Descripcion: " + (book.descripcion) 
            + " Estado: " + (book.estado) + " Ubicacion:" + (book.ubicacion) + " Fecha de publicacion: " + (book.fecha_publicacion)
            + " Editorial: " + (book.editorial) + "Paginas: " + (book.paginas) + " Dimensiones: "  + (book.dimensiones)
            + " Peso: "  + (book.peso)+ " Disponible: "  + (book.disponible));
    }

    //eliminar un libro
    removeBook(titulo:string):void{
        const index= this.books.findIndex(book => book.titulo===titulo);
        if(index !=-1){
            this.books.splice(index,1);
            console.log("Libro:"+titulo +" elimnado de la pila de libros");
        } else {
            console.log("Libro:"+titulo +" no encontrado en la pila de libros");
        }
    } 

    interactions():void {
        const titles= this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Autor: Book.autor,
                Editorial: Book.editorial,
                Precio: Book.precio
            }})
            console.log(titles)
        const language = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Idioma: Book.idioma
            }})
            console.log(language)
        const status = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Estado: Book.estado
            }})
            console.log(status)
        const isbn = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                ISBN: Book.isbn
            }})
            console.log(isbn)
        const pages = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Páginas: Book.paginas
            }})
            console.log(pages)
        const dimensions = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Dimensiones: Book.dimensiones
            }})
            console.log(dimensions)
        const date = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Fecha_Publicación: Book.fecha_publicacion
            }})
            console.log(date)
        const price = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Precio: Book.precio
            }})
            console.log(price)
        const weigth = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Peso: Book.peso
            }})
            console.log(weigth)
        const location= this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Ubicación: Book.ubicacion
            }})
            console.log(location)
        const gender = this.books.map((Book)=>{
            return{
                Título: Book.titulo,
                Género: Book.genero
            }})
            console.log(gender)
    }

    discount():void{
        let librosConDescuentos = this.books.map((Book)=>{
            return{
                ...Book,
                descuento:20,
            }})
            console.log(librosConDescuentos)
        let librosResumenDescuento = librosConDescuentos.map((Book)=>{
            return{
                Titulo: Book.titulo,
                Autor: Book.autor,
                Editorial:Book.editorial,
                Precio: Book.precio,
                Descuento: Book.descuento
            }});
            console.log(librosResumenDescuento)
    }

    filters():void{
        const expensiveBooks = this.books.filter((Book)=>{
            return Book.precio > 30;
        });
        console.log(expensiveBooks);
        let booksWithMayorPages= this.books.sort((a, b)=> b.paginas - a.paginas)
        .map((Book)=>{
            return{
                Titulo: Book.titulo,
                Autor: Book.autor,
                Editorial:Book.editorial,
                Paginas: Book.paginas
            }});
            console.log(booksWithMayorPages);
    }
    
    pages():void{
        const booksWithGreatestNumberPages=this.books.sort((a, b)=> b.paginas - a.paginas);
        console.log(booksWithGreatestNumberPages)
    }
    
    chained():void{
        let booksExpensiveByTitle=this.books.filter((Book)=>{
            return Book.precio > 11;
        })
        .map ((Book) => {
            return{
                Título: Book.titulo,
                Autor: Book.autor,
                Precio: Book.precio
            }}) 
            .sort((a, b)=> b.Precio - a.Precio)
            console.log(booksExpensiveByTitle)
        
    }

    searchOne():void{
        let bookTitle = this.books.find((Book) => {
            return Book.titulo === "Anna y el beso frances";
        });
        console.log(bookTitle)
    }

    searchTwo():void{
        let bookAuthor = this.books.find((Book) => {
            return Book.autor === "Gabriel García Márquez";
        });
        console.log(bookAuthor)
    }

    searchThree():void{
        let bookDatePublication = this.books.find((Book) => {
            return Book.fecha_publicacion === "1985";
        });
        console.log(bookDatePublication)
    }

    searchFour():void{
        let bookGenre = this.books.find((Book) => {
            return Book.genero === "Fantasía y Aventura";
        });
        console.log(bookGenre)
    }

    searchFive():void{
        let bookLanguage = this.books.find((Book) => {
            return Book.idioma === "Español";
        });
        console.log(bookLanguage)
    }
}