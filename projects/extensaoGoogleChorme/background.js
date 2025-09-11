// Cache dos últimos valores
let lastValues = {};

// Função para chamadas de API com retry
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 429) throw new Error("API Limit Exceeded");
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Tentativa ${i + 1} falhou:`, error.message);
            if (i === retries - 1) throw error;
        }
    }
}

// Atualiza badge com a moeda selecionada
async function updateBadge(currency) {
    try {
        const response = await fetchWithRetry(`https://economia.awesomeapi.com.br/last/${currency}`, 3);
        const currencyData = response[currency.replace("-", "")];

        let badgeText;
        if (currencyData && currencyData.bid) {
            if (currency.startsWith("BTC")) {
                badgeText = "BTC"; // mostra BTC no badge
                lastValues[currency] = parseFloat(currencyData.bid).toFixed(6); // mantém valor real no cache
            } else {
                badgeText = parseFloat(currencyData.bid).toFixed(2);
                lastValues[currency] = badgeText;
            }
        } else {
            badgeText = lastValues[currency] || "N/A";
        }

        chrome.action.setBadgeText({ text: badgeText.toString() });
        chrome.action.setBadgeBackgroundColor({ color: currencyData ? "#1565C0" : "#FF9800" });

    } catch (error) {
        console.error("Erro ao atualizar o badge:", error.message);
        const cachedValue = lastValues[currency] || "ERR";
        chrome.action.setBadgeText({ text: cachedValue.toString() });
        chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
    }
}

// Escuta mensagem do popup.js quando o usuário escolhe moeda
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "currencySelected") {
        updateBadge(message.currency);
    }
});

// Inicializa a extensão
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensão instalada ou atualizada. Iniciando badges...");
    chrome.alarms.clearAll(() => {
        chrome.alarms.create("updateBadge", { periodInMinutes: 10 });
    });

    // Atualiza moedas principais
    const currencies = ["USD-BRL", "EUR-BRL", "GBP-BRL", "INR-BRL", "CHF-BRL", "BTC-BRL", "JPY-BRL", "AUD-BRL", "CAD-BRL"];
    currencies.forEach(c => updateBadge(c));
});

// Atualiza badge a cada 10 minutos
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "updateBadge") {
        console.log("Alarm disparado. Atualizando badges...");
        const currencies = ["USD-BRL", "EUR-BRL", "GBP-BRL", "INR-BRL", "CHF-BRL", "BTC-BRL", "JPY-BRL", "AUD-BRL", "CAD-BRL"];
        currencies.forEach(c => updateBadge(c));
    }
});
