function filterEmails() {
    const inputText = document.getElementById("emailInput").value.trim();
    if (!inputText) {
        alert("Vui lòng nhập danh sách email!");
        return;
    }

    const lines = inputText.split("\n");
    let emailArray = [];
    let totalXu = 0;

    lines.forEach(line => {
        let parts = line.trim().split(/\s+/);
        if (parts.length >= 2) {
            let email = parts[0];
            let password = parts.slice(1).join(" ");
            let xuMatch = password.match(/\b\d+-\d+\b/);
            let xu = xuMatch ? parseFloat(xuMatch[0].replace("-", ".")) : 0;
            totalXu += xu;
            emailArray.push({ email, password, xu });
        }
    });

    renderEmails(emailArray);
    document.getElementById("totalXu").innerText = totalXu.toFixed(4);
    document.getElementById("totalMoney").innerText = (totalXu * 55).toLocaleString();
}

function renderEmails(emailArray) {
    const emailTable = document.getElementById("emailTable");
    emailTable.innerHTML = "";
    emailArray.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button class="copy-btn" onclick="copyEmail('${item.email}', '${item.password}')">📋</button></td>
            <td>${index + 1}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.xu.toFixed(4)}</td>
            <td>${(item.xu * 55).toLocaleString()}</td>
        `;
        emailTable.appendChild(row);
    });
}
