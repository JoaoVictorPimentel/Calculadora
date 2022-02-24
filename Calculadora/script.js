function calcular(numero1, numero2) {
    numero1 = parseFloat(document.getElementById("numero1").value)
    numero2 = parseFloat(document.getElementById("numero2").value)

    seletor = document.getElementById("seletor").value

    switch(seletor){
        case "Somar":
            calculo = numero1 + numero2
            document.getElementById("resultado").innerHTML = `Resultado: ${calculo}`
            break
            
        case "Subtrair":
            calculo = numero1 - numero2
            document.getElementById("resultado").innerHTML = `Resultado: ${calculo}`
            break
        
        case "Multiplicar":
            calculo = numero1 * numero2
            document.getElementById("resultado").innerHTML = `Resultado: ${calculo}`
            break

        case "Dividir":
            calculo = Math.round(numero1 / numero2)
            if(Number.isNaN(calculo) ){
                document.getElementById("resultado").innerHTML = `Insira um número válido!`
            } else{
                document.getElementById("resultado").innerHTML = `Resultado: ${calculo}`
                break
            }
    }

}

    
        