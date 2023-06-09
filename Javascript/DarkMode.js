const root = document.querySelector(":root");
//Função para mudança de tema pela mudança das váriaveis no CSS;
function darkToogle() {
    const btnCheck = document.getElementById("dark-button");
    const html = document.querySelector("html").attributes;
    const main = document.querySelectorAll("main");
    const label = document.querySelector("label");
    const img = document.getElementById("figure-icon");
    const icon = document.querySelector("span#Dark-Icon");
    if (btnCheck.checked == true) {
        html[1].textContent = "light";
        main.forEach(i => {
            i.classList.replace("bg-dark", "bg-white");
            i.classList.replace("border-light", "border-dark");
        });
        label.innerHTML = "Modo Claro";
        img.style.filter = "invert(1) brightness(15%)";
        label.classList.replace("btn-outline-light", "btn-outline-dark");
        icon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
        root.style.setProperty('--color-white', "#202020");
        root.style.setProperty('--color-black', "#efefef ");

    } else {
        html[1].textContent = "dark";
        main.forEach(i => {
            i.classList.replace("bg-white", "bg-dark");
            i.classList.replace("border-dark", "border-light");
        });
        label.classList.replace("btn-outline-dark", "btn-outline-light");
        label.innerHTML = "Modo Escuro";
        img.style.filter = "invert(1) brightness(65%)";
        icon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
        root.style.setProperty('--color-white', "#efefef ");
        root.style.setProperty('--color-black', "#202020");
    };
};

if(document.querySelector('title').textContent ==  "Formulário de Doação") {
    document.getElementById("dark-button").addEventListener("change", darkToogle, true);
//Mudança de tema para o formulário;
} else {
    function DarkcheckboxToogle() {
        let label = document.querySelector("label.darkModeElement");
        if (this.checked == true) {
            root.style.setProperty('--color-white', "#efefef ");
            root.style.setProperty('--color-black', "#202020");
            label.classList.replace("bi-brightness-high", "bi-moon-stars-fill");
            label.textContent = "Modo Escuro";
        } else {
            root.style.setProperty('--color-white', "#202020");
            root.style.setProperty('--color-black', "#efefef ");
            label.classList.replace("bi-moon-stars-fill", "bi-brightness-high");
            label.textContent = "Modo Claro";
        };
    };
    document.getElementById("DarkButton").addEventListener("change", DarkcheckboxToogle, true);
}

