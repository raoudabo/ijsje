document.getElementById('controleerleeftijd').addEventListener('click', function() {
 // Voeg een click-event listener toe aan het element met de ID 'controleerleeftijd'.
  
  let geboortedatum = new Date(document.getElementById('verjaardag').value);
  // Haal de waarde van het input element met de ID 'verjaardag' op, wat de geboortedatum van de gebruiker is.
  
  let now = new Date();
  // Maak een nieuw Date object dat de huidige datum en tijd vertegenwoordigt
  
  let age = now.getFullYear() - geboortedatum.getFullYear();
  // Bereken de leeftijd door het geboortejaar af te trekken van het huidige jaar en sla het op in de variabele 'age'.
  
  if (age >= 12) {
      document.getElementById('result').textContent = "Je bent oud genoeg! Veel plezier!";
      setTimeout(function() {
          window.location.href = "index.html";
      }, 1500); 
      // Controleer of de leeftijd groter dan of gelijk aan 12 is. Dan voor je na 1500ms doorgestuurd
  } else {
      document.getElementById('result').textContent = "Je bent nog te jong.";
      // Als de leeftijd kleiner is dan 12 blijf je op dezelfde pagina.
  }
});

