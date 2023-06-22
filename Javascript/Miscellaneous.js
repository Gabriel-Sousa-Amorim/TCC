let date = new Date();
let day = date.getDay()
let year = date.getFullYear();

function CatchTheDay() {
    switch (day) {
        //Caso Domingo
        case(0) :
        const Sunday = document.getElementById("Sunday");
        Sunday.style.filter = "grayscale(0%)";
        Sunday.style.filter = "brightness(100%)";
        Sunday.style.boxShadow = "1px 1px 40px var(--color-red)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Sunday.style.zIndex = "0";
        break;
        
        //Caso Segunda
        case(1) :
        const Monday = document.getElementById("Monday");
        Monday.style.filter = "grayscale(0%)";
        Monday.style.filter = "brightness(100%)";
        Monday.style.boxShadow = "1px 1px 40px var(--color-orange)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Monday.style.zIndex = "0"
        break;
        
        //Caso Terça
        case(2) :
        const Tuesday = document.getElementById("Tuesday");
        Tuesday.style.filter = "grayscale(0%)";
        Tuesday.style.filter = "brightness(100%)";
        Tuesday.style.boxShadow = "1px 1px 40px var(--color-yellow)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Tuesday.style.zIndex = "0"
        break;
        
        //Caso Quarta
        case(3) :
        const Wednesday = document.getElementById("Wednesday");
        Wednesday.style.filter = "grayscale(0%)";
        Wednesday.style.filter = "brightness(100%)";
        Wednesday.style.boxShadow = "1px 1px 40px var(--color-green)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Wednesday.style.zIndex = "0";
        break;
        
        //Caso Quinta
        case(4) :
        const Thursday = document.getElementById("Thursday");
        Thursday.style.filter = "grayscale(0%)";
        Thursday.style.filter = "brightness(100%)";
        Thursday.style.boxShadow = "1px 1px 40px var(--color-yellow)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Thursday.style.zIndex = "0"
        break;
        
        //Caso Sexta
        case(5) :
        const Friday = document.getElementById("Friday");
        Friday.style.filter = "grayscale(0%)";
        Friday.style.filter = "brightness(100%)";
        Friday.style.boxShadow = "1px 1px 40px var(--color-orange)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Friday.style.zIndex = "0";
        break;
        
        //Caso Sábado
        case(6) :
        const Saturday = document.getElementById("Saturday");;
        Saturday.style.filter = "grayscale(0%)";
        Saturday.style.filter = "brightness(100%)";
        Saturday.style.boxShadow = "1px 1px 40px var(--color-red)";
        document.querySelectorAll(".card-child").forEach(i => i.style.zIndex = "1");
        Saturday.style.zIndex = "0";
        break;
    }
}

function CatchTheYear() {
    if(document.querySelector("section.main-title").children[0].innerHTML == "Sobre Nós") {
    CatchTheDay();
    document.getElementById("copyright-year").innerHTML = year;
} else {
    document.getElementById("copyright-year").innerHTML = year;
};
};
CatchTheYear();

if(document.querySelector('.main-title').children[0].textContent.toLocaleLowerCase() ==  "contatos")  {
    function ContactLink(idSection,urlpath) {
        document.getElementById(idSection).addEventListener("click", function() {
            console.log(window.location);
            window.location.href = urlpath;
        })
    }
    ContactLink("section-Instagram" , "https://www.instagram.com/ong_mangara/");
    ContactLink("section-Facebook" , "https://www.facebook.com/people/Organização-Mangará/100092684681862/");
    ContactLink("section-Twitter" , "https://www.instagram.com/ong_mangara/");
}