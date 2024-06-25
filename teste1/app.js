//initializing hidden sections
initHiddenSections();

function initHiddenSections() {
    const sections = document.querySelectorAll("div.bloco");

    sections.forEach(section => {
        section.classList.add("hidden");
    });
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add("shown");
        } else {
            entry.target.classList.remove("shown");
        }
    });
});

const hiddenSections = document.querySelectorAll(".bloco.hidden");
hiddenSections.forEach((sec) => observer.observe(sec));



// will be useful later when having many languages greetings!!!!!!!!! look for api that generates greetings in different languages

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }


var greetings = [
    "welcome", 
    "bem-vindo(a)", 
    "bienvenido(a)", 
    "歡迎", 
    "환영",
    "bienvenu(e)", 
    "καλως ΗΡΘΑΤΕ", 
    "welkom",
    "üdvözöljük", 
    "fáilte", 
    "benvenuto(a)", 
    "いらっしゃいませ", 
    "velkommen", 
    "Witamy", 
    "добро пожаловать", 
    "välkommen", 
    "ยินดีต้อนรับ", 
    "Ласкаво просимо", 
    "chào mừng"
];

const welcomeText = document.querySelector(".welcome h1");

function rotateLanguages() {
    for (let i = 0; i < greetings.length; i++) {
        setTimeout(rotate => {
            welcomeText.innerHTML = greetings[i];
        }, 6000 * i);

    }
}

welcomeText.style = "animation: waveWelcomeFadeIn 2s ease infinite;";
setTimeout(stopWaving => {welcomeText.style = "animation: welcomeFadeIn 6s ease infinite;"}, 2000);

setTimeout(rotateLanguages, 2000);
setInterval(rotateLanguages, (6000 * greetings.length) + 2000);