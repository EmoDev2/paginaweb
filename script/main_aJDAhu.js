

//BY BUX GOODLESS DO NOT EDIT
/*Controlador al cargar la pagina web */
document.addEventListener("DOMContentLoaded", function() {
//Cargamos los elementos
var HideElemen = document.getElementById("HiddeElement");
var banner = document.getElementById("hiddeBan");
let toggle = true; //Boleano interruptor

HideElemen.addEventListener("click", function () {
    if (toggle) {
        document.querySelector(".general").style.top = "100px";
        document.getElementById("e").style.fill = "000"
        banner.classList.add("hiddenBan"); 
    } else {
        document.querySelector(".general").style.top = "450px";
        HideElemen.style.fill = "#EFEFEF"
        banner.classList.remove("hiddenBan"); 
    }
    toggle = !toggle; // Alternar estado correctamente
});

function handleResize() {
    let width = window.innerWidth;
    var movilNavegacion = document.getElementById("mobile-nav")
    var computadoraNavegacion = document.getElementById("computer-nav")

//DETENCION DE DISPOSITIVOS MOVILES E PC
    if (width <= 1024) {
        console.log("Event Mobile Fired");
        movilNavegacion.className = "JhdasHaOD"
        computadoraNavegacion.className = "hidden"
        document.querySelector(".general").style.left = "200px";
    
    } else {
        console.log("Event Computer/laptop Fired");
        movilNavegacion.className = "hidden"
        computadoraNavegacion.className = "BhdHE7d"
        document.querySelector(".general").style.left = "40px";
    }
}

window.addEventListener("resize", handleResize);


window.addEventListener("load", handleResize);
let ip = "IP_DEL_SERVIDOR.NET"; // El valor que quieres copiar

document.getElementById("copiarBtn").addEventListener("click", function() {
    let textoBoton = document.querySelector("#copiarBtn .fonta"); // Seleccionar el <span>
    
    navigator.clipboard.writeText(ip).then(() => {  
        textoBoton.textContent = "IP Copiado!"; // Mantener estructura
        
        setTimeout(() => {
            textoBoton.textContent = "Copiar IP";
        }, 1000);  

    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
});
});