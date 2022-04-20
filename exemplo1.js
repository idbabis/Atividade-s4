/* For/Break/Continue */
/* Utilize a estrutura de repetição for para imprimir no console conforme 
instruções:
a) números de 1 a 50  
b) quando chegar no número 25 interrompa a instrução e pare o loop 
c) quando chegar no número 10 pule a instrução| */

for(let contador = 1 ; contador <=50; contador = contador +1) { 
  
    if(contador === 26) {
    console.log("Deu o break")
      break
    }  
  
    if(contador === 10) {
    console.log("CONTINUE");
    continue;
  }

  console.log("Continue a contar " + contador);
}


 