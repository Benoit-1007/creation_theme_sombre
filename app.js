let btn         = document.querySelector('#mode');
let icon        = document.querySelector('.icon');
let textButton  = document.querySelector('span');

function modeSombre() {
    document.body.classList.add('dark'); // ou document.body.className = 'dark
    textButton.textContent = "Thème clair";
    icon.classList.add('fa-solid', 'fa-sun');
    icon.classList.remove('fas', 'fa-moon');
    localStorage.setItem('theme', 'sombre'); // si l'item 'theme' n'existe pas, on le crée et on lui attribut la valeur 'sombre', si il existe déjà, on remplace sa valeur
}

if(localStorage.getItem('theme'))  {
    if(localStorage.getItem('theme') === 'sombre') {
        modeSombre()
    }
}

btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        // on passe en mode clair
        document.body.classList.remove('dark');
        textButton.textContent = "Thème sombre";
        icon.classList.add('fas', 'fa-moon');
        icon.classList.remove('fa-solid', 'fa-sun');
        localStorage.setItem('theme', 'clair');
    }
    else {
        // on passe en mode sombre
        modeSombre();
    }
})

