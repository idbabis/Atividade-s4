/* Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE". */

let contador = 10;
  
  while(contador < 100) {
  
    contador +=10;
    
    if(contador === 60 || contador === 90) {
      console.log("CONTINUE");
      continue;
    }
  
    console.log("Continue a contar " + contador);
  
  }
  
