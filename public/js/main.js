let bottle = document.getElementById("Bottle")
let water = document.getElementById("Water")
let Etiquette = document.getElementById("Etiquette")
let BottleContain = document.getElementById("BottleContain")

// Button 

let GlassOne = document.getElementById("GlassOne")
let GlassTwo = document.getElementById("GlassTwo")
let GlassThree = document.getElementById("GlassThree")
let GlassFour = document.getElementById("GlassFour")
let GlassFive = document.getElementById("GlassFive")
let GlassSix = document.getElementById("GlassSix")
let GlassSeven = document.getElementById("GlassSeven")
let GlassHeight = document.getElementById("GlassHeight")

let Glass = [GlassOne, GlassTwo, GlassThree, GlassFour, GlassFive, GlassSix, GlassSeven, GlassHeight]

function playSound(soundFile) {
    audioSource.src = soundFile; // Change la source du son
    audioPlayer.load();           // Recharge l'élément audio avec la nouvelle source
    audioPlayer.play();           // Joue le son
}

function handleGlassClick(glassElement, soundPath) {
    glassElement.addEventListener("click", () => {
        if (glassElement.classList.contains("selected")) {
            playSound(soundPath);
        }
    });
}

function GlassSelect(x) {
    let indexGlass = Glass.indexOf(x);

    // Vérifie si le verre cliqué a déjà la classe "selected"
    let isSelected = x.classList.contains("selected");

    // Vérifie si le verre suivant existe et ne possède pas la classe "selected"
    let nextGlass = Glass[indexGlass + 1];
    let isNextSelected = nextGlass && nextGlass.classList.contains("selected");

    if (isSelected && !isNextSelected) {
        // Si le verre est sélectionné et que le suivant n'est pas sélectionné, on enlève la classe "selected" pour lui et les suivants
        for (let i = indexGlass; i < Glass.length; i++) {
            Glass[i].classList.remove("selected");
        }
    } else {
        // Sinon, on ajoute la classe "selected" jusqu'au verre cliqué inclus et on enlève la classe des verres après
        for (let i = 0; i <= indexGlass; i++) {
            Glass[i].classList.add("selected");
        }
        for (let i = indexGlass + 1; i < Glass.length; i++) {
            Glass[i].classList.remove("selected");
        }
    }
}

function Drink() {
    let liquid = 0;
    
    Glass.forEach(element => {
        if (element.classList.contains("selected")) {
            liquid += 12.5; // Ajoute 12.5 à chaque verre sélectionné
        }
    });
    Etiquette.style.height = (100 - liquid) + "%"
    BottleContain.textContent = (2000 - liquid*10*2)/1000 + " L"
    water.style.height = liquid + "%";
    water.textContent = liquid + "%";
    if (liquid == 0){
        water.textContent = "";
    }
    if (liquid == 100){
        Etiquette.classList.add("hidden")
    }else{
        Etiquette.classList.remove("hidden")
    }
}



Glass.forEach(element => {
    element.addEventListener("click", () =>{
        GlassSelect(element)
        Drink()
    })
});

handleGlassClick(GlassOne, "./public/sound/premier.mp3");
handleGlassClick(GlassTwo, "./public/sound/deuxieme.mp3");
handleGlassClick(GlassThree, "./public/sound/troisieme.mp3");
handleGlassClick(GlassFour, "./public/sound/1litre.mp3");
handleGlassClick(GlassFive, "./public/sound/colonnel.mp3");
handleGlassClick(GlassSix, "./public/sound/dur.mp3");
handleGlassClick(GlassSeven, "./public/sound/avantDernier.mp3");
handleGlassClick(GlassHeight, "./public/sound/morte.mp3");