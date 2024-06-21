class Venta {
    identificacion_cliente:number
    titulo_libro:string
    precio_libro:number
    cantidad_libro:number

    constructor(
        identificacion_cliente:number,
        titulo_libro:string,
        precio_libro:number,
        cantidad_libro:number
    ){
        this.identificacion_cliente=identificacion_cliente
        this.titulo_libro=titulo_libro
        this.precio_libro=precio_libro
        this.cantidad_libro=cantidad_libro
    }
}