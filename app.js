const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

let date;
let currencies;
let data;


function isValidAmount(value) {
    return !isNaN(value) && value > 0;
}



const getCurrencyData = async (From, To) => {
    try {
        let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${From}.json`);
        data = await response.json();
        date = data.date;
        console.log(date);

        let F = From.toUpperCase();
        let T = To.toUpperCase();
        currencies = data[From];
        if (!data[From][To]) {
            alert("Invalid Data");
            return;
        }
        let total = data[From][To] * amount.value;
        document.getElementById("First").innerText = amount.value;
        document.getElementById("Mid").innerText = `${F}=`;
        document.getElementById("Second").innerText = total
        document.getElementById("Last").innerText = `${T}[${date}]`;
    } catch (error) {
        console.error("Error:", error);
    }
};

getCurrencyData("usd", "bdt");


fromDropdown.addEventListener("change", () => {
    from = fromDropdown.value;
    fromImg.src = `https://flagsapi.com/${from}/flat/64.png`;
    from = fromDropdown.options[fromDropdown.selectedIndex].text;
});


toDropdown.addEventListener("change", () => {
    to = toDropdown.value;
    toImg.src = `https://flagsapi.com/${to}/flat/64.png`;
    to = toDropdown.options[toDropdown.selectedIndex].text;
});

document.getElementById("converter").addEventListener("click", () => {
    if (!isValidAmount(amount.value)) {
        alert("Invalid data");
        return;
    }
    let f = from.toLowerCase();
    let t = to.toLowerCase();
    console.log(f, t);
    getCurrencyData(f, t);
})

document.querySelector(".fa-right-left").addEventListener("click", () => {
    if (!isValidAmount(amount.value)) {
        alert("Invalid data");
        return;
    }
    getCurrencyData(to.toLowerCase(), from.toLowerCase());
    fromImg.src = `https://flagsapi.com/${toDropdown.value}/flat/64.png`
    toImg.src = `https://flagsapi.com/${fromDropdown.value}/flat/64.png`;
    let y = fromDropdown.value;
    fromDropdown.value = toDropdown.value;
    toDropdown.value = y;
    let x = from;
    from = to;
    to = x;
    console.log(from, to);
});

