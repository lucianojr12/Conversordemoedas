
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


async function Convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high


    let ValorEmReais = Number(document.getElementById("input").value)
    let inputdolar = document.getElementById("input-dolar")
    let inputreal = document.getElementById("input-real")

    if (select.value === "US$ Dólar Americano"){
    let ValorEmDolares = ValorEmReais / dolar
    inputdolar.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}

    if(select.value === "€ Euro"){
        let valorEmEuros = ValorEmReais / euro
        inputdolar.innerHTML = valorEmEuros.toLocaleString('de-DE', {style:'currency', currency:"EUR"})
    }
  
    inputreal.innerHTML = ValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// essa Função é para trocar a bandeira e os nomes das moedas
function trocamoedas() {
    let textomoeda = document.getElementById("texto-moeda")
    let bandeira = document.getElementById("bandeira")
    
        if (select.value === "US$ Dólar Americano"){
        textomoeda.innerHTML = "Dólar Americano"
        bandeira.src ="./Conversor de moedas/eua.png"
        }
        if(select.value === "€ Euro"){
        textomoeda.innerHTML = "Euro"
        bandeira.src ="./Conversor de moedas/euro.png"

        }
        
        Convertermoedas()
    }


botao.addEventListener("click", Convertermoedas)
select.addEventListener("change", trocamoedas)