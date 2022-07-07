const paragrafo = document.getElementById('paragrafo');
const botao = document.getElementById('btn');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const textoFooter = "Feito por Maria Luíza Teixeira, aluna do Bootcamp Santander Fullstack 2022 &copy."


function alteraClasses(){
    paragrafo.classList.toggle("texto-dark-mode");
    body.classList.toggle('body-dark-mode');
    botao.classList.toggle('btn-dark-mode');
    footer.classList.toggle('footer-dark-mode');
}

function alteraTextos(){
    footer.innerHTML = textoFooter;
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";


    if (botao.classList.contains('btn-dark-mode')){
        paragrafo.innerText = darkMode + " ON";
        botao.innerText = lightMode;
        footer.innerHTML += " &#127761;";
        return;
    } else {
        paragrafo.innerText = lightMode + " ON";
        botao.innerText = darkMode;
        footer.innerHTML += " &#127774;";
        return;   
    }
}


function mudarTema(){
    alteraClasses()
    alteraTextos()    
}

addEventListener('click', mudarTema);

