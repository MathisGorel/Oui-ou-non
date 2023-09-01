const button = document.querySelector('#button');


button.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#generateurAffichage').style.display = "none";
    document.querySelector('#oui').style.display = "none";
    document.querySelector('#non').style.display = "none";

    random()
    
    if (random() === 1) {
        document.querySelector('#oui').style.display = "block";
        
    } else {
        document.querySelector('#non').style.display = "block";
    }
});

function random () {
    return Math.floor(Math.random() * 2) + 1;
}
