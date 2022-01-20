document.querySelector(".burger").addEventListener("click", () => 
   document.querySelector(".container").classList.toggle("show-menu")
);

/*era so sidebar mas mudamos p container que tem burger e sidebar para o bruger acompanhhar o movimento*/

/*var burger = document.querySelector(".burger"); /*ir buscar atraves do document funcao querySelector

burger.addEventListener("click",function(){ /*a partir da variavel burger , add evento de clique, qnd acontecer ele exexcuta a funcao
   document.querySelector(".container").classList.toggle("show-menu"); /*a funcao vai pegar o elemento sidebar, a partir da lista de classes show menu vai fazer uma alteracao toggle, adicionar ou remover, a classe show menu vai mostrar se vai ser exibido ou nao
}); /*a classe show menu criamos no CSS */