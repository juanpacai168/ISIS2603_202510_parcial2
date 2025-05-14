export class Candidatos {
    public id: number;
    public nombre: string;
    public pais_origen: string;
    public edad: number;
    public vertiente_religiosa: string;
    public foto: string;

    constructor(
        id: number,
        nombre: string,
        pais_origen: string,
        edad: number,
        vertiente_religiosa: string,
        foto: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.pais_origen = pais_origen;
        this.edad = edad;
        this.vertiente_religiosa = vertiente_religiosa;
        this.foto = foto;
    }
}