const convertButton = document.querySelector(".convertbutton"); // Seleciona o botão de conversão
const currencySelectde = document.querySelector("#converter-de"); // Seleciona o campo de seleção de moeda a ser convertida
const currencySelect = document.querySelector("#converter-para"); // Seleciona o campo de seleção de moeda para ser convertida

currencySelect.addEventListener("change", changecurrency) // Adiciona um evento de mudança ao campo de seleção de moeda para ser convertida, que chama a função changecurrency
convertButton.addEventListener("click", convertValues) // Adiciona um evento de clique ao botão de conversão, que chama a função convertValues

async function getDolarToday() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const data = await response.json();
    return Number(data.USDBRL.bid);
}

async function getEuroToday() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL");
    const data = await response.json();
    return Number(data.EURBRL.bid);
}

async function getLibraToday() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/GBP-BRL");
    const data = await response.json();
    return Number(data.GBPBRL.bid);
}

async function getBTCToday() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/BTC-BRL");
    const data = await response.json();
    return Number(data.BTCBRL.bid);
}
async function convertValues (){ // Função que converte o valor da moeda de acordo com o valor do dólar hoje
    const inputCurrencyValue = document.querySelector(".input-currency").value; // Seleciona o valor digitado no campo de entrada de moeda
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Seleciona o elemento que exibirá o valor convertido
    const currencyValueConverted = document.querySelector(".currency-value"); // Seleciona o elemento que exibirá o valor convertido
    const dolarToday = await getDolarToday(); // Consulta do valor do dolar em tempo real chamando a função getDolarToday eu busca da api economia
    const euroToday = await getEuroToday(); // Valor do euro hoje by funcion getEuroToday
    const libraToday = await getLibraToday(); // Valor da libra hoje by funcion getEuroToday
    const BTCToday = await getBTCToday(); // Valor do BTC hoje by function getBRCToday

    console.log(
        currencySelectde.value, currencySelect.value, 
        "Valor do Dolar hoje" ,dolarToday, 
        "Valor do Euro hoje", euroToday, 
        "Valor da libra hoje", libraToday,
        "Valor do Bitcoin hoje",BTCToday
    ); // Exibe no console o valor da moeda a ser convertida, o valor digitado e o valor da moeda para ser convertida
    
    if(currencySelect.value == "dolar"){ // Se a moeda para a qual o valor será convertido for o dólar
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue / dolarToday); // Formata o valor convertido para o formato de moeda americana  
    }
    if(currencySelect.value == "euro"){ // Se a moeda para a qual o valor será convertido for o euro
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue / euroToday); // Formata o valor convertido para o formato de euro  
    }
    if(currencySelect.value == "libra"){ // Se a moeda para a qual o valor será convertido for o libra
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue / libraToday); // Formata o valor convertido para o formato de libra  
    }
       if(currencySelect.value == "bitcoin"){ // Se a moeda para a qual o valor será convertido for o bitcoin
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8
            }).format(inputCurrencyValue / BTCToday); // Formata o valor convertido para o formato de bitcoin  
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { // Seleciona o formato de moeda brasileira
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue); // Formata o valor convertido para o formato de moeda brasileira    
} // Função que exibe o valor convertido na tela

function changecurrency(){  // Função que exibe o nome da moeda para a qual o valor será convertido
    const currencyname = document.querySelector("#currency-name"); // Seleciona o elemento que exibirá o nome da moeda para a qual o valor será convertido
    const currencyImgConverted = document.querySelector(".currency-img-converted"); // Seleciona a imagem da moeda convertida

    if(currencySelect.value == "dolar"){ // Se a moeda para a qual o valor será convertido for o dólar
        currencyname.innerHTML = "Dólar americano"
        currencyImgConverted.src = "./img/dolar.png"; // Altera a imagem da moeda convertida para a imagem do dólar
    }
   if(currencySelect.value == "euro"){ // Se a moeda para a qual o valor será convertido for o euro
        currencyname.innerHTML = "Euro"
        currencyImgConverted.src = "./img/euro.png"; // Altera a imagem da moeda convertida para a imagem do euro
   }
   if(currencySelect.value == "libra"){ // Se a moeda para a qual o valor será convertido for o euro
        currencyname.innerHTML = "Libra"
        currencyImgConverted.src = "./img/libra.png"; // Altera a imagem da moeda convertida para a imagem do euro
   }
   if(currencySelect.value == "bitcoin"){ // Se a moeda para a qual o valor será convertido for o BTC
        currencyname.innerHTML = "Bitcoin"
        currencyImgConverted.src = "./img/bitcoin.png"; // Altera a imagem da moeda convertida para a imagem do BTC
   }

  convertValues (); // Chama a função convertValues para converter o valor da moeda
   
}