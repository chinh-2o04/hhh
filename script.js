function filterEmails() {
    const inputText = document.getElementById("emailInput").value.trim();
    const lines = inputText.split("\n");
    let emailArray = [];

    lines.forEach(line => {
        const parts = line.trim().split(" ");
        if (parts.length >= 2) {
            const email = parts[0];
            const password = parts.slice(1).join(" ");
            const xuMatch = email.match(/(\d+)-(\d+)/);

            let xu = 0;
            if (xuMatch) {
                xu = parseInt(xuMatch[1]) || 0;
            }

            emailArray.push({ email, password, xu });
        }
    });

    renderEmails(emailArray);
}

function renderEmails(emailArray) {
    const emailTable = document.getElementById("emailTable");
    emailTable.innerHTML = "";
    emailArray.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><button class="copy-btn" onclick="copyEmail(${index}, '${item.email}', '${item.password}')">📋</button></td>
            <td>${index + 1}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.xu.toFixed(4)}</td>
            <td>${(item.xu * 55).toLocaleString()}</td>
        `;
        emailTable.appendChild(row);
    });
}

function copyEmail(index, email, password) {
    const textToCopy = `${email} ${password}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyNotification(index);
    }).catch(err => {
        alert("Lỗi sao chép, thử lại!");
    });
}

function showCopyNotification(index) {
    const notification = document.getElementById("copyNotification");
    notification.innerText = `Đã sao chép mail ${index + 1}`;
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 1500);
}

function openConvertPage() {
    window.location.href = "convert.html";
}
