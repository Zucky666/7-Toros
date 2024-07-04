let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 2000); // Cambia 5000 a 2000 para que avance cada 2 segundos
