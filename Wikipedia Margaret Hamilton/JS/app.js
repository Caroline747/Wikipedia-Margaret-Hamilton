// Botao Dark Mode
document.querySelector('#theme-toggle').addEventListener('click', (event) => {
 event.preventDefault();

 document.body.classList.toggle('dark');
});

// Botao voltar para o topo
var bnt = document.querySelector('#back-to-top');

bnt.addEventListener("click", function() {
    window.scrollTo(0, 0);
});