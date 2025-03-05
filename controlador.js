//alert("estoy vinculado")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


//dectentando de clic eventos en pantalla
botonFormulario.addEventListener("click",function(evento){

    //1.se desactiva el comportamiento por defecto
    evento.preventDefault()

    //2.probamos que el evento se esta escuchando con exito
    //3.creamos variables para almacenar los datos del usuario
    let estaturaUsuario=inputAlturaUsuario.value
    let PesoUsuario=inputPesoUsuario.value

    //4. se crea una variable para el resultado 
    let resultado=document.getElementById("resultado")

    //5. se modifica el resultado con los value 
    resultado.textContent=(estaturaUsuario)
    //6.se calcula lo pedido:
    let calculoIMC=PesoUsuario/(estaturaUsuario*estaturaUsuario)
    //6A. Se crea variable para alamacenar la imagen
    let imagen=document.getElementById("foto")
   

    //7. se debe decidir sobre el resultado
    if(calculoIMC<18.5){
resultado.textContent="estas bajo de peso"
 imagen.src="./img/bajopeso.PNG"
    }
    else if(calculoIMC>=18.5 && calculoIMC<24.9){
resultado.textContent="estas melo, felicitaciones"
imagen.src="./img/normal.PNG"
    }
    else if(calculoIMC>=24.9 && calculoIMC<29.9){
      resultado.textContent="deja de mecatiar lengua de burro, tienes sobrepeso"
      imagen.src="./img/sobrepeso.PNG"
    }
    else if(calculoIMC>=29.9 && calculoIMC<34.9){
      resultado.textContent="deja de consumir comida chatarra"
      imagen.src="./img/obesidad.PNG"
    }
    else{
      resultado.textContent="san pedro te espera"
      imagen.src="./img/extremo.PNG"
    }


    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/
})