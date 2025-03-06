function convertMoney(rate) {
    let xu = parseFloat(document.getElementById("xuInput").value);
    if (isNaN(xu) || xu <= 0) {
        alert("Vui lòng nhập số xu hợp lệ!");
        return;
    }
    document.getElementById("convertedMoney").innerText = (xu * rate).toLocaleString();
}

function customConvert() {
    document.getElementById("customRate").style.display = "block";
    document.getElementById("customConvertBtn").style.display = "block";
}

function applyCustomRate() {
    let customRate = parseFloat(document.getElementById("customRate").value);
    if (isNaN(customRate) || customRate <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }
    convertMoney(customRate);
}
