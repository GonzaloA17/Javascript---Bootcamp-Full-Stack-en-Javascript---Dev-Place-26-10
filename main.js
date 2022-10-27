    
/* Ejercicio 1 */    
/* class NIF{
    DNI;
    Letra;

    constructor( $DNI = 0, $Letra = " "){
        this.DNI = $DNI;
        this.Letra = $Letra;
    }

    leer($DniNuevo){
        this.DNI = $DniNuevo;
        this.generarLetra();
    }



    generarLetra (){
        $Letra = 'TRWAGMFPDXBNJZSQVHLCKE'
        $resto = this.DNI % 23;

        for($i =0 ; $i < strlen($Letra); $i){
            if($resto == $i){
                $this.$DNI .= '-' .$Letra[$i].'<br>';
                break;
            }
        }
    }

    mostrar (){
        console.log(this.DNI);
    }


}*/

/* Ejercicio 2*/
/*
class motor{
    estado = false;

    constructor(estado){
        this.estado = estado;

    }

    encendido(estado){
        return estado = true;
    }

    apagado(estado){
        return estado = false;
    }
}

class rueda{
    estado = false;

    constructor(estado){
        this.estado = estado;

    }

    inflado(estado){
        return estado = true;
    }

    desinflado(estado){
        return estado = false;
    }
}

class ventana{
    estado = false;

    constructor(estado){
        this.estado = estado;

    }

    abierto(estado){
        return estado = true;
    }

    cerrado(estado){
        return estado = false;
    }
}

class puerta{
    ventana;
    estado;


    estado = false;

    constructor(estado){
        this.estado = estado;
        this.ventana = new ventana ();

    }

    abrir(estado){
        return estado = true;
    }

    cerrar(estado){
        return estado = false;
    }

}


class tutu{
    motor;
    puerta;
    puerda1;
    rueda1;
    rueda2;
    rueda3;
    rueda4;

    constructor (){
        this.motor = new motor();
        this.puerta = new puerta();
        this.puerda1 = new puerta();
        this.rueda1 = new rueda();
        this.rueda2 = new rueda();
        this.rueda3 = new rueda();
        this.rueda4 = new rueda();
    }


}

let auto = new tutu;

*/

/* Ejercicio 3*/

/*
class Persona{

    String Nombre;
    Int edad;
    Int DNI;

    constructor(nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = dni;
    }
    
    mostrar(){
        return this.nombre + " " + this.edad + " " + this.DNI + " " ;
    }
    
    esMayorDeEdad(){
        return this.edad > 18;
    }

    ///getter and Setter Nombre
    getNombre() {
        return this.nombre;
    }
    setNombre(newNnombre) {
       this.name = newName;
    }

    ///getter and Setter EDAD

    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
       this.edad = newEdad;
    }


    ///getter and Setter DNI
    getDNI() {
        return this.DNI;
    }
    
      // Setter
    setDNI(newDNI) {
       this.DNI = newDNI;
    }
}
*/





/* Ejercicio 4*/

class cuenta{
    titular;
    cantidad;

    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    getTitular() {
        return this.titular;
    }
    setTitular(newTitular) {
       this.titular = newTitular;
    }

    getCantidad() {
        return this.cantidad;
    }
    setCantidad(newCantidad) {
       this.cantidad = newCantidad;
    }

    mostrar(){
        return this.titular + ' ' + this.cantidad + ' ' ;
    }

    ingresar(cantidad){
        return this.cantidad < 0 ;

    }

    retirar(cantidad){
        ingresar;

        this.ingresar() 

    }

}