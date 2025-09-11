document.getElementById("currency-input").addEventListener("input", convertCurrency);

let currentCurrency = null;
let currentCurrencyValue = null;
let bestValue = null;
let worstValue = null;

// Cache de últimos valores
let lastValues = {};

// Inicializa os valores de Best e Worst
document.getElementById("best-value").textContent = "Nenhuma Selecionada";
document.getElementById("worst-value").textContent = "Nenhuma Selecionada";

function formatNumber(value) {
    if (!value || isNaN(value)) return "0.00";
    if (value < 0) value = 0;
    if (value < 1e6) return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    if (value >= 1e24) return '∞';
    if (value >= 1e21) return (value / 1e21).toFixed(2) + 'S';
    if (value >= 1e18) return (value / 1e18).toFixed(2) + 'QQ';
    if (value >= 1e15) return (value / 1e15).toFixed(2) + 'Q';
    if (value >= 1e12) return (value / 1e12).toFixed(2) + 'T';
    if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B';
    if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
}

function calculatePercentageChange(current, best) {
    if (!best) return 0;
    return ((parseFloat(current) - parseFloat(best)) / parseFloat(best)) * 100;
}

function setCurrency(newCurrency) {
    if (newCurrency === currentCurrency) return;
    currentCurrency = newCurrency;

    const currencyValueElement = document.getElementById("dollar-value");
    const percentageElement = document.getElementById("percentage-change");

    currencyValueElement.classList.add("fade-out");
    percentageElement.classList.add("fade-out");

    setTimeout(async () => {
        try {
            await fetchCurrencyValue();
            convertCurrency();
            chrome.runtime.sendMessage({ type: "currencySelected", currency: newCurrency });
        } catch (error) {
            console.error("Erro ao atualizar cotação:", error);
        }

        currencyValueElement.classList.remove("fade-out");
        percentageElement.classList.remove("fade-out");
        currencyValueElement.classList.add("fade-in");
        percentageElement.classList.add("fade-in");
    }, 150);
}

async function fetchCurrencyValue() {
    const currencyValueElement = document.getElementById("dollar-value");
    const percentageElement = document.getElementById("percentage-change");

    if (!currentCurrency) {
        currencyValueElement.textContent = "Selecione uma Moeda";
        return;
    }

    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/last/${currentCurrency}`);
        if (!response.ok) throw new Error("Erro API");
        const data = await response.json();
        const currencyData = data[currentCurrency.replace("-", "")];

        if (currencyData && currencyData.bid) {
            currentCurrencyValue = parseFloat(currencyData.bid);
            bestValue = parseFloat(currencyData.low);
            worstValue = parseFloat(currencyData.high);
            lastValues[currentCurrency] = currentCurrencyValue;
        } else {
            currentCurrencyValue = lastValues[currentCurrency] || null;
            currencyValueElement.textContent = currentCurrencyValue
                ? `${currentCurrency.split("-")[0]} → R$ ${formatNumber(currentCurrencyValue)}`
                : "Erro ao carregar";
            return;
        }

        const percentageChange = calculatePercentageChange(currentCurrencyValue, bestValue);
        const formattedPercentage = formatNumber(Math.abs(percentageChange));

        currencyValueElement.textContent = `${currencyData.code} → R$ ${formatNumber(currentCurrencyValue)}`;

        if (percentageChange > 0) {
            percentageElement.textContent = `+${formattedPercentage}%`;
            percentageElement.style.color = "green";
        } else if (percentageChange < 0) {
            percentageElement.textContent = `-${formattedPercentage}%`;
            percentageElement.style.color = "red";
        } else {
            percentageElement.textContent = "0%";
            percentageElement.style.color = "gray";
        }

        updateBestWorstValues();

    } catch (error) {
        console.error("Erro ao buscar cotação:", error.message);
        currentCurrencyValue = lastValues[currentCurrency] || null;
        currencyValueElement.textContent = currentCurrencyValue
            ? `${currentCurrency.split("-")[0]} → R$ ${formatNumber(currentCurrencyValue)}`
            : "Erro ao carregar";
    }
}

function updateBestWorstValues() {
    document.getElementById("best-value").textContent = bestValue ? `R$ ${formatNumber(bestValue)}` : "N/A";
    document.getElementById("worst-value").textContent = worstValue ? `R$ ${formatNumber(worstValue)}` : "N/A";
}

function convertCurrency() {
    const currencyInput = parseFloat(document.getElementById("currency-input").value);
    const convertedValueElement = document.getElementById("converted-value");

    if (currentCurrencyValue && currencyInput) {
        let convertedValue = currencyInput * currentCurrencyValue;
        convertedValueElement.textContent = `R$ ${formatNumber(convertedValue)}`;
    } else {
        convertedValueElement.textContent = "";
    }
}

async function convertToSelectedCurrency() {
    const realInput = parseFloat(document.getElementById("currency-input").value);
    const convertedValueElement = document.getElementById("converted-value");

    try {
        await fetchCurrencyValue();
        if (currentCurrencyValue && realInput) {
            let convertedValue = realInput / currentCurrencyValue;
            convertedValueElement.textContent = `${formatNumber(convertedValue)} ${currentCurrency.split("-")[0]}`;
        } else {
            convertedValueElement.textContent = "Digite um valor válido.";
        }
    } catch (error) {
        console.error("Erro na conversão:", error);
        convertedValueElement.textContent = lastValues[currentCurrency]
            ? `${formatNumber(lastValues[currentCurrency])}`
            : "Erro ao carregar";
    }
}

// Eventos dos botões
["usd", "eur", "gbp", "inr", "chf", "btc", "jpy", "aud", "cad"].forEach(id => {
    document.getElementById(id).addEventListener("click", () => setCurrency(id.toUpperCase() + "-BRL"));
});

document.getElementById("convert-button").addEventListener("click", convertToSelectedCurrency);

document.getElementById("share-button").addEventListener("click", function () {
    const currencyInput = document.getElementById("currency-input").value;
    const convertedValueElement = document.getElementById("converted-value");
    if (!currencyInput || !convertedValueElement.textContent) {
        alert("Nenhuma conversão para copiar.");
        return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleString('pt-BR');
    const unitValue = currentCurrencyValue;

    const conversionText = `
Conversão: ${convertedValueElement.textContent}
Moeda Convertida: ${currentCurrency.split("-")[0]} → R$ ${formatNumber(unitValue)}
Data e Hora da Cotação: ${formattedDate}

Fonte: Extensão de Cotação de Moedas, criada por Lucas Prado
Extensão Link: https://chromewebstore.google.com/detail/cambio-em-tempo-real/ndkfobfkdpmlmkmnohgeibiaokgbioid
`;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = conversionText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    showToast("Câmbio copiado com sucesso!");
});

function showToast(message) {
    const toast = document.getElementById("toast-message");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => toast.classList.remove("show"), 3000);
}

document.getElementById("coffee-button").addEventListener("click", function () {
    window.open('https://www.buymeacoffee.com/lsprado', '_blank');
});

// Inicializa a cotação ao abrir popup
fetchCurrencyValue();
