function darkToogle() {
    let btnCheck = document.getElementById("dark-button");
    let html = document.querySelector("html").attributes;
    let main = document.querySelector("main").classList;
    let label = document.querySelector("label");
    if (btnCheck.checked == true) {
        html[1].textContent = "light";
        main.replace("bg-dark", "bg-white");
        main.replace("border-light", "border-dark");
        label.classList.replace("btn-outline-light", "btn-outline-dark");
        label.innerHTML = "Modo Escuro";
    } else {
        html[1].textContent = "dark";
        main.replace("bg-white", "bg-dark");
        main.replace("border-dark", "border-light");
        label.classList.replace("btn-outline-dark", "btn-outline-light");
        label.innerHTML = "Modo Claro";
    };
};

function FormatadorCPF() {
    }
function ValidaCPF() {
    let CPF = document.getElementById("CPF").value;
    console.log(CPF.length)
    console.log(CPF)

    if (CPF.length == 11){
        let i =  0;
        let  newCPF =  0;
        let ObjCPF = Object.values(CPF);
        for (f = 10; f >= 2;f--) {
            ObjCPF[i] = parseInt(ObjCPF[i]) * f;
            console.log(ObjCPF);
            i++;
            newCPF = ObjCPF.slice(0,9);
        }
        var sum = newCPF.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        },0);
        console.log(sum)
        let j = sum / 11;
        console.log(parseFloat(j))
        console.log(parseInt(j))
        j = j - parseInt(j)
        j.toFixed(1);
    } else {
        console.log(false)
    }
} 
FormatadorCPF()

