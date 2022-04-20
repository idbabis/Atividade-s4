/* Crie uma função que irá receber um número e 
retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 */

const resultado = (numero) => {
    let fatorial = 1
    for(let index = 1; index <= numero; index++){
        fatorial = fatorial * index    
    }
    return `O fatorial de ${numero} é ${fatorial}`;
}

console.log (resultado(3))

