
function operadores(number1, number2) {
    if (number1 === number2) {
        console.log(`Os números ${number1} e ${number2} são iguais.`)
    }
    else {
        console.log(`Os números ${number1} e ${number2} não são iguais.`)
    }
    
    let soma = number1 + number2

    if (soma > 10 && soma < 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
    } else if (soma < 10 && soma < 20) {
        console.log(`Sua soma é ${soma}, que é menor que 10 e menor 20.`)
    }else {
        console.log(`Sua soma é ${soma}, que maior que 10 e maior que 20.`)
    }
}


operadores(12, 13)