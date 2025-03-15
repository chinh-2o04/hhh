function filterEmails() {
    let inputText = document.getElementById("inputEmails").value.trim();
    let lines = inputText.split(/\r?\n/);
    let filteredEmails = [];

    lines.forEach((line, index) => {
        let cleanedLine = line.replace(/\|/g, " ").trim();
        let parts = cleanedLine.split(/\s+/);
        if (parts.length >= 2) {
            let email = parts[0];
            let password = parts.slice(1).join(" ");
            filteredEmails.push({ stt: index + 1, email, password });
        }
    });

    displayEmails(filteredEmails);
}

function displayEmails(emails) {
    let tableHTML = `<table>
                        <tr>
                            <th>STT</th>
                            <th>Sao chép</th>
                            <th>Email</th>
                            <th>Mật khẩu</th>
                        </tr>`;

    emails.forEach((item) => {
        tableHTML += `<tr>
                        <td>${item.stt}</td>
                        <td><button class="copy-btn" onclick="copyToClipboard('${item.email} ${item.password}', ${item.stt})">📋</button></td>
                        <td>${item.email}</td>
                        <td>${item.password}</td>
                      </tr>`;
    });

    tableHTML += `</table>`;
    document.getElementById("outputTable").innerHTML = tableHTML;
}

function copyToClipboard(text, index) {
    navigator.clipboard.writeText(text).then(() => {
        let notification = document.getElementById("copyNotification");
        notification.innerText = `Đã sao chép email ${index}`;
        notification.classList.remove("hidden");
        setTimeout(() => {
            notification.classList.add("hidden");
        }, 3000);
    });
}

function pasteClipboard() {
    navigator.clipboard.readText().then((clipText) => {
        document.getElementById("inputEmails").value = clipText;
    });
}
