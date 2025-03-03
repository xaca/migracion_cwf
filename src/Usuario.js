class Usuario{
    constructor(obj){
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
        this.hobbies = [];
    }

    saludar(){
        console.log(`hola soy${this.nombre} ${this.apellido}`);
    }
}

export default Usuario;