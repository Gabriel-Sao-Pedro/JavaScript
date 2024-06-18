function mudandoCor() {
   document.getElementById("formulario").className = "foco";
}
function verificando() {
    
   var numCar = document.getElementById("formulario").value.length 
   if (numCar < 3){
         document.getElementById("formulario").className = "menor"
   }else{
         document.getElementById("formulario").className = "maior"
   }

}