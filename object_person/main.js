/*Hagamos un programa que me permita crear objetos tipo persona capturando los datos desde un formulario en la interfaz
 de usuario UI, y que haya un boton que diga "Mostrar Usuarios" y me muestre todos los usuarios en una tabla que tenga 
 como campos los mismos atributos de la persona, y ademas las columnas IMC, Hombre?, Mujer?
*/
let form = document.getElementById('form');

function submitHandler(e) {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let dni = document.getElementById('dni').value;
  let sex = document.getElementById('sex').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  e.preventDefault();


}

  function Persona (nombre='', edad=0, dni=0, sexo='hombre', peso=0, altura=0){
    this.nombre = document.getElementById('name').value;
    this.edad = document.getElementById('age').value;
    this.dni = document.getElementById('dni').value;
    this.sexo = document.getElementById('sex').value;
    this.peso = document.getElementById('weight').value;
    this.altura = document.getElementById('height').value;
    console.log(Persona);
  }

    //function enviarAlerta(){
      //  let dato = document.getElementsByName('name')[0].value;
        //let dato2 = document.getElementsByName('age')[0].value;
        //console.log(dato, dato2);
      //}