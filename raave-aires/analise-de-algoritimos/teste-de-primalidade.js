//função que calcula a primalidade de um número:
function primalidade(num) {
    if (num <= 1) {
      return (num + ' não é um número primo.');
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return (num + ' não é um número primo.');
      }
    }

    return (num + ' é um número primo.');
  }
// console.log(primalidade(9))

//função que calcula a primalidade de um número. versão otimizada:
function primo(n){ 
  for(let i = 2; i <= n-1; i++){ 
    if (n % i === 0){
      return (n + ' não é um número primo.');
    }
  }
  
  return (n + ' é um número primo.');
}
// console.log(primo(9))











    

