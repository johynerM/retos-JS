const usuario = {
    nombre: "Juan",
    apellido: "Miranda",
    edad: 15,
    direccion : {
        calle: "cll 150 A",
        ciudad: "Bucarayork",
        pais: "Colombia"
    } 
}

const desestructura={
    ciudad,
    pais
} = usuario.direccion;

function presentarse(){
    console.log("Hola, soy "  + usuario.nombre);
    console.log("Tengo " + usuario.edad);
    console.log("vivo en " + usuario.direccion.ciudad + ", " + usuario.direccion.pais);

}
presentarse();
console.log("hola");