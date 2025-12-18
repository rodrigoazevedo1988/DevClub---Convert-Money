const convertButton = document.querySelector(".convertbutton"); // Seleciona o botão de conversão
const currencySelectde = document.querySelector("#converter-de"); // Seleciona o campo de seleção de moeda a ser convertida
const currencySelect = document.querySelector("#converter-para"); // Seleciona o campo de seleção de moeda para ser convertida

currencySelect.addEventListener("change", changecurrency) // Adiciona um evento de mudança ao campo de seleção de moeda para ser convertida, que chama a função changecurrency
convertButton.addEventListener("click", convertValues) // Adiciona um evento de clique ao botão de conversão, que chama a função convertValues

function convertValues (){ // Função que converte o valor da moeda de acordo com o valor do dólar hoje
    const inputCurrencyValue = document.querySelector(".input-currency").value; // Seleciona o valor digitado no campo de entrada de moeda
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Seleciona o elemento que exibirá o valor convertido
    const currencyValueConverted = document.querySelector(".currency-value"); // Seleciona o elemento que exibirá o valor convertido
    const dolarToday = 5.2; // Valor do dólar hoje
    const euroToday = 6.2; // Valor do euro hoje
    console.log(currencySelectde.value, currencySelect.value); // Exibe no console o valor da moeda a ser convertida, o valor digitado e o valor da moeda para ser convertida
    
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

  convertValues (); // Chama a função convertValues para converter o valor da moeda
   
}