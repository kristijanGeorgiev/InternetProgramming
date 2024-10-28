interface ExchangeRate {
    rates: { [key: string]: number };
    base: string;
    date: string;
}

const API_URL = "https://api.currencyfreaks.com/latest?apikey=5693e5e7716e4bc1b5e05765a64ed237";
async function loadData(): Promise<ExchangeRate | null> {
 {
        const response = await fetch(API_URL);
        const data: ExchangeRate = await response.json();
        return data;
   }
}

async function generateCurrencyList(): Promise<void> {
    const data = await loadData();
    if (data) {
        const currencyKeys = Object.keys(data.rates);
        const fromCurrencySelect = document.getElementById("from-currency") as HTMLSelectElement;
        const toCurrencySelect = document.getElementById("to-currency") as HTMLSelectElement;

        currencyKeys.forEach(currency => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.text = currency;
            fromCurrencySelect.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.text = currency;
            toCurrencySelect.appendChild(option2);
        });
    }
}
async function calculate(): Promise<void> {
    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const fromCurrencySelect = document.getElementById("from-currency") as HTMLSelectElement;
    const toCurrencySelect = document.getElementById("to-currency") as HTMLSelectElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
    }

    const data = await loadData();
    if (data && data.rates[fromCurrency] && data.rates[toCurrency]) {
        const fromRate = data.rates[fromCurrency];
        const toRate = data.rates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        resultDiv.textContent = "Unable to retrieve conversion rate.";
    }
}

document.getElementById("convert-btn")?.addEventListener("click", calculate);
window.onload = generateCurrencyList;