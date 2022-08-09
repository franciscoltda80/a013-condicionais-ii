//Aninhado

const num = Number(prompt('DIGITE UM NUMERO'))

if(num %2===0 ){
    if(num %3===0)
    console.log(`O numero ${num} é divisivel por 2 e 3.`)
}
else{
    console.log(`O numero ${num} não é divisivel por 2 ou 3, tente outro numero.`)
}



// if (num %2===0 && num %3===0 ) {
//     console.log(`O numero ${num} é divisivel por 2 e 3. `)
// }
// else{
//     console.log(`O numero ${num} não é divisivel por 2 ou 3, tente outro numero.`)
// }