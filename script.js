function Busca(){
    var texto = document.querySelector('#sc').value;
    if (texto === ''){
        alert("Nada foi informado. Tente novamente.");
        return false;
    }
    else{
        alert(texto);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    });
});

function inicializarmodal() {
    const modal = document.getElementById("modal");
    const closemodal = document.getElementById("fecharmodal");
    const promobutton = document.getElementById("promobutton");

    // Exibir o modal ao carregar a página
    modal.style.display = "flex";

    // Fechar modal ao clicar no botão de fechar
    closemodal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Redirecionar para a página de promoções ao clicar no botão
    promobutton.addEventListener("click", function () {
        window.location.href = "promocoes.html";
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", inicializarmodal);

function destacarUltimaPalavra(selector) {
  let paragrafo = document.querySelector(selector);
  
  if (paragrafo) {
      let palavras = paragrafo.innerHTML.trim().split(" ");
      if (palavras.length > 1) {
          palavras[palavras.length - 1] = `<span class="destaque-palavra">${palavras[palavras.length - 1]}</span>`;
          paragrafo.innerHTML = palavras.join(" ");
      }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  destacarUltimaPalavra(".destaque-texto-pequeno");
});

