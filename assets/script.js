const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const themeToggle = document.getElementById("theme-toggle");

function updateClock() {
    const now = new Date();
    
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    updateDate();
}

function updateDate() {
    const now = new Date();
    const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric" };
    let formattedDate = now.toLocaleDateString("pt-BR", options);

    dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

setInterval(updateClock, 1000);
updateClock();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Modo Claro";
    } else {
        themeToggle.textContent = "Modo Escuro";
    }
});