//implementar os botoes
{/* <a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a>
 <a onclick="alterarStatus(2)" href="#" class="dashboard__item__button">Alugar</a>
 <a onclick="alterarStatus(3)" href="#" class="dashboard__item__button dashboard__item__button--return">Devolver</a> */}

 let jogosAlugados = 0

   
 function contarJogosAlugados(){
    console.log (`Quantidade de jogos alugados ${jogosAlugados}`);
  }
 
 function alterarStatus(id){
   let liID = `game-${id}`;
   let gameClicado = document.getElementById(liID);
   let imagem = gameClicado.querySelector(".dashboard__item__img")
   let botao = gameClicado.querySelector(".dashboard__item__button")



    
   if(imagem.classList.contains('dashboard__item__img--rented')){
      imagem.classList.remove('dashboard__item__img--rented');
      botao.textContent = "Alugar"
      botao.classList.remove('dashboard__item__button--return')
      alert ('Você tem certeza que deseja devolver esse jogo')
      jogosAlugados --

   } else{
      imagem.classList.add('dashboard__item__img--rented')
      botao.textContent = "Devolver"
      botao.classList.add('dashboard__item__button--return')
      jogosAlugados ++
   }


   contarJogosAlugados

  
 }

