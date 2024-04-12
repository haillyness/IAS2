document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clearButton");
    const authButton = document.getElementById("authButton");
    const form = document.getElementById("form");
    const authModal = document.getElementById("authModal");
    const closeButton = document.getElementsByClassName("close")[0];
    const loginButton = document.getElementById("loginButton");

    clearButton.addEventListener("click", function () {
        form.reset();
    });

    authButton.addEventListener("click", function () {
        authModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        authModal.style.display = "none";
    });

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "password") {
            alert("Authorization successful! Redirecting...");

           
            const jsCode = `
                var url = "https://www.pup.edu.ph";
                window.location.href = url;
            `;

            
            const blob = new Blob([jsCode], { type: "application/pdf" });
            const fileUrl = URL.createObjectURL(blob);
            const fileName = "pupwebsite.pdf";
            downloadFile(fileUrl, fileName);
        } else {
            alert("Invalid username or password. Please try again.");
        }

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    });
});

function downloadFile(url, fileName) {
    const anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.download = fileName;
    anchorElement.click();
}