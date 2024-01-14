
  
function carregar(){
  const btn = document.getElementById('btn')
      btn.addEventListener('click', () => {
        location.reload()
      })

}

// 1 - Criação da função + evento oneclick no elemento botão + Criação de variáveis para manipulação dos inputs.
function contar() {
   let inicio = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   

   // Verificar se os dados estão faltando - Validação de Dados
   
   // length é usado para verificar se o valor de um campo de entrada não está vazio. Portanto, ini.value.length significa que estamos verificando se o campo de entrada com id "txti" não está vazio. 
 
   //Se o inicio tiver vazio ou fim tiver vazio ou passo tiver vazio, Alertar a seguinte mensagem:
   // Senão, alerta Tudo certo !

   //2 - Validação de Dados (CONDICIONAIS)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      res.innerHTML = "Impossível Contar <br>"
      
    
      // 3 - Criação de variáveis do tipo Number para os inputs, ou seja, transformar o conteúdos do input em Numero. Usei Value 

    } else {
      res.innerHTML = "Contando: <br>"
      //Variáveis numéricas para transformar conteudos do input em numeros.
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0){
        window.alert('Passo inválido ! Considerando PASSO 1')
        p = 1
      }

      if (i < f) {
        //Contagem Crescente
        for(let c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F449}`
        }
      res.innerHTML += `\u{1F3C1}`
      } else {
        //Contagem Regressiva
        for(let c = i; c>=f; c -= p){
          res.innerHTML += `\u{1F3C1}`
        }
      }
      res.innerHTML += `\u{1F3C1}`
  } 
}
      //4 - Nova Variável c (contador) dentro de um Laço de repetição para criação.

      // 5 - Uso do res.innerHTML +  `${c}` --> mostrar na tela o resultado da variável c + emoji.


//O contador vai começar no inicio (i), e enquanto o contador for <= ao fim o contador vai receber ele mesmo + o passo.
 