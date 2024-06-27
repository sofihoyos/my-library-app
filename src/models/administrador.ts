export class Administrador{
    nombre:string
    identidicacion:number
    telefono:number
    correo_electronico:string
    constructor(
        nombre:string,
        identidicacion:number,
        telefono:number,
        correo_electronico:string,
    ){
        this.nombre=nombre
        this.identidicacion=identidicacion
        this.telefono=telefono
        this.correo_electronico=correo_electronico
    }
}