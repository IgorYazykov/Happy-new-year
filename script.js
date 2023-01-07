let moroz = document.getElementById("ded_moroz");

setInterval(function() { setTimeout(function() {
    moroz.classList.add('animation');
    }, 1000);
    moroz.classList.remove('animation');
}, 20000);
