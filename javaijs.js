let bericht = "Press on one of the ice creams to choose a different flavor!"
//Hier wordt variabele 'bericht' gedefinieerd

let kop = document.querySelector("h1")
//Hier wordt variabele 'kop' gedefinieerd. Hij selecteert het eerste <h1> element
const button = document.querySelector("button")

function verandertitel() {
kop.textContent = bericht
} //Een function om de titel te veranderen, pas laten uitvoeren als er op de button wordt geklikt

button.addEventListener("click", verandertitel)
//de button een klik functie geven, functie word uitgevoerd als er op de knop word geklikt


const colors = ['#FF6387', '#FFD730', '#ADFF4F', '#40E1D0', '#FF69B4', '#BA45D3'];
//een verzameling van kleuren die de afbeeldingen veranderen

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
//Deze functie kiest een willekeurige kleur uit de 'colors' array

const iceCreams = document.querySelectorAll('.ice-cream');
// Selecteert alle elementen met de class 'ice-cream' en slaat deze op in de constante var 'iceCreams'.
iceCreams.forEach(iceCream => {
    iceCream.addEventListener('click', () => {
        iceCream.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    });
});
// Voegt een click-event listener toe. Wanneer een ijsje wordt aangeklikt, wordt de kleur van het ijsje veranderd

const iceCreamName = document.getElementById('ice-cream-name');
// Selecteerd het element waar de naam van het ijsje zal worden weergegeven.

iceCreams.forEach(iceCream => {
    iceCream.addEventListener('click', () => {
        const name = iceCream.getAttribute('data-name');
        iceCreamName.textContent = `Je hebt gekozen voor een ${name}`;
    });
});
// Voeg een event listener toe aan elk ijsje. Wanneer een ijsje wordt geklikt, haalt deze de waarde van het 'data-name' 
// Hiermee wordt de naam van het gekozen ijsje weergegeven.

window.addEventListener('click', function () {
    
    let audio = document.getElementById("song");
    audio.play();
  })
// Voegt een click-event listener toe aan het window-object. Wanneer ergens op de pagina wordt geklikt, 
// wordt het audio-element met de ID 'song' geselecteerd en wordt de audio afgespeeld.
