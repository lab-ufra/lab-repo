//algoritmo do pequeno teorema de Fermat:
function aleatorioInteiro(min, max) {
    min = Math.ceil(min); //retorna o menor número inteiro maior ou igual ao argumento
    max = Math.floor(max); //retorna o maior número inteiro maior ou igual ao argumento
    
        return Math.floor(Math.random() * (max - min) + min);
}

  
function primo2(n) {
    // escolha aleatoriamente um numero a inteiro maior que 1 e menor que N
    let a = Math.floor(Math.random() * (n - 2)) + 2;
    if (Math.abs(a, n - 1, n) == 1) {
      return true;
    } else {
      return false;
    }
  }

// console.log(aleatorioInteiro(1,7))
console.log(primo2(11))