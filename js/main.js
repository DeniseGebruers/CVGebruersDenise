let click = 1;

function mostrar () {
    if (click == 1) {
        document.getElementById ("contactoContenido").style.display = "inline-block";
        click = click + 1;
    } else {
        document.getElementById ("contactoContenido").style.display = "none";
        click = 1;
    }
}