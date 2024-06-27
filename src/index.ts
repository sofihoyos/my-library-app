import { pilaLibros } from "./models/pilaLibros";
import { Book } from "./models/libro";

const Library = new pilaLibros();
const bookOne= new Book("Anna y el beso frances","stephanie Perkins","juvenil-romantico","ingles",25.00,
"tapa blanda",9781409579939,"Esta historia sigue a Anna, una chica americana que no sabe casi anda de París. Por eso, cuando sus padres le anuncian que pasará un año en un internado de París, la idea no acaba de convencerla. Pero, en la Ciudad del Amor, conoce al chico ideal: Étienne St. Clair. Es listo, encantador y muy guapo. El único problema es que también tiene novia. ¿Conseguirá Anna el ansiado beso de su príncipe azul? El humor y la tensión que se respiran página a página en el debut literario de Stephanie Perkins te atraparán y te llegarán al corazón.","nuevo", 
"casa del libro","2012","Usborne",416,"14.7 x 2.7 x 20.4 cm","1,05 kg",true);
const bookTwo= new Book("Cien años de soledad","Gabriel García Márquez","Realismo mágico","Español",20.00,"Tapa dura",9788437604947,"La historia de la familia Buendía en el pueblo ficticio de Macondo.",
"Nuevo","Biblioteca Principal","1967","Usborne",432,"15 x 23 cm","600 g", false);
const bookThree= new Book("El amor en los tiempos del cólera","Gabriel García Márquez","Romance","Español",15.00,"Bolsillo",9788437604954,"Una historia de amor que perdura a lo largo de décadas.",
"Usado (buen estado)","Estantería 2","1985","Usborne",368,"12 x 18 cm","400 g", true);
const bookFour =new Book("Cazadores de sombras: Ciudad de las almas perdidas","Cassandra Clare","Fantasía urbana","Español",21.00,"Tapa blanda",9788425341986,"Clary y sus amigos deben salvar a Jace de una influencia maligna que lo controla.",
"Nuevo","Fantasía y Aventura","2012","Destino",544,"14 x 21 cm", "700 g ", false);
const bookFive = new Book("Cazadores de sombras: Ciudad de los ángeles caídos","Cassandra Clare","Fantasía urbana","Español",21.00,"Tapa blanda",9788425341979, "La paz parece estar a la vista, pero nuevas amenazas surgen y Clary debe enfrentarlas.",
"Nuevo","Fantasía y Aventura","2011","Destino",432,"14 x 21 cm","600 g",false);
const bookSix = new Book("Cazadores de sombras: Ciudad de cristal","Cassandra Clare","Fantasía urbana","Español",22.00,"Tapa blanda",9788425341962,"Clary debe viajar a la ciudad ancestral de los cazadores de sombras para salvar a su madre.",
"Nuevo","Fantasía y Aventura","2009", "Destino",544,"14 x 21 cm", "700 g",false);
const bookSeven = new Book("Cazadores de sombras: Ciudad de ceniza","Cassandra Clare","Fantasía urbana","Español",20.00,"Tapa blanda",9788425341955,"Clary continúa su lucha contra los demonios mientras descubre más sobre su pasado.",
"Nuevo", "Fantasía y Aventura","2008","Destino",464,"14 x 21 cm","650 g",false);
const bookEigth =new Book ("Cazadores de sombras: Ciudad de hueso","Cassandra Clare","Fantasía urbana","Español",20.00,"Tapa blanda",9788425341948,"Clary Fray descubre un mundo oculto lleno de demonios y cazadores de sombras.",
"Nuevo","Fantasía y Aventura","2007", "Destino",512,"14 x 21 cm","700 g",true);
const bookNine =new Book("Divergente","Veronica Roth","Distopía, Ciencia ficción","Español",15.00,"Tapa blanda", 978842702135," En un mundo dividido en facciones basadas en virtudes humanas,Tris Prior descubre un peligroso secreto y debe decidir en quién confiar.",
"Nuevo","Distopías y Ciencia Ficción","2011","Anagrama",464,"15 x 22 cm","500 g",true);
const bookTen = new Book("Insurgente","Veronica Roth","Distopía, Ciencia ficción","Español",16.00, "Tapa blanda",9788427202142,"Tris Prior debe enfrentarse a las consecuencias de sus decisiones mientras una guerra se desata entre las facciones.",
"Nuevo","Distopías y Ciencia Ficción","2012", "Anagrama",464,"15 x 22 cm","500 g",true);
function ListBooks():void{
    Library.listBooks();
}
function AddBook():void {
    Library.addBook(bookOne);
    Library.addBook(bookTwo);
    Library.addBook(bookThree);
    Library.addBook(bookFour);
    Library.addBook(bookFive);
    Library.addBook(bookSix);
    Library.addBook(bookSeven);
    Library.addBook(bookEigth);
    Library.addBook(bookNine);
    Library.addBook(bookTen);
}
function RemoveBooks():void {
    const title = prompt("Ingresa el título del libro a borrar") || "";
    Library.removeBook(title)
}
function Interactions():void{
    Library.interactions
}
function Discount():void{
    Library.discount
}
function Filters():void {
    Library.filters
}
function Pages():void {
    Library.pages
}
function Chained():void {
    Library.chained
}
function SearchOne():void {
    Library.searchOne
}
function SearchTwo():void {
    Library.searchTwo
}
function SearchThree():void {
    Library.searchThree
}
function SearchFour():void {
    Library.searchFour
}
function SearchFive():void {
    Library.searchFive
}
// switch
const continuar:string = "si";
while (continuar.toLocaleLowerCase() === "si") {
    const menu:string=`MENU\n"
    1- Mostrar la pila de libros\n
    2- Agregar un nuevo libro a la pila\n
    3- Borrar un libro de la pila de libros\n
    4- Listar libros\n
    5- Resumenes de este segmento\n
    6- Funcionalidades de este segmento\n\n
    Ingrese el numero de lo que desea hacer`
    const decision:number=parseInt(prompt(menu) || "0");
    switch (decision) {
        case 1:
            ListBooks()
            break;
        case 2:
            AddBook()
            break;
        case 3:
            RemoveBooks()
            break;
        case 4:
            const menu1:string=`MENU\n
            1- Manejo de Array Methods\n
            2-Manejo de Array Methods + spreed operator.\n\n
            Ingrese el numero de lo que desea hacer`
            let decision2=parseInt(prompt(menu1) || "0");
            switch (decision2) {
            case 1:
            // MANEJO DE ARRAY METHODS
            Interactions()
            break;
            case 2: 
            // Manejo de Array Methods + spreed operator.
            Discount()
                break;
            }
        break;
        case 5:
            const menu2=`MENU\n"
            1- Manejo de Array methods Filter()\n
            2- Manejo de Array methods sort()\n
            3- Manejo Array Methods encadenados.\n\n
            Ingrese el numero de lo que desea hacer`
            let decision3=parseInt(prompt(menu2)|| "0");
            switch (decision3) {
            case 1:
            // Manejo de Array methods Filter()
            Filters()
                break;
            case 2:
            // Manejo de Array methods sort()
            Pages()
            break;
            case 3:
            // Manejo Array Methods encadenados.
            Chained()
            break;
            }
            break;
        case 6:
            const menu3=`MENU\n
            1- Un objeto del array por titulo\n
            2- Un objeto del array por autor\n
            3- Un objeto del array por fecha de publicacion\n
            4- Un objeto del array por genero\n
            5- Un objeto del array por idioma\n
            Ingrese el numero de lo que desea hacer`
            let decision4=parseInt(prompt(menu3)||"0");
            switch (decision4) {
                case 1:
                    SearchOne();
                    break;
                case 2:
                    SearchTwo();
                    break;
                case 3:
                    SearchThree();
                    break;
                case 4:
                    SearchFour();
                    break;
                case 5:
                    SearchFive();
                    break;
            }
        break; 
        default:
            break;
    }
continuar= prompt("Deseas continuar si/no")
}