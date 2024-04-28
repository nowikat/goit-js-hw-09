// Pobierz przyciski z DOM
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Funkcja generująca losowy kolor w formacie heksadecymalnym
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId; // Zmienna do przechowywania ID interwału

// Obsługa kliknięcia przycisku "Start"
startButton.addEventListener('click', () => {
  // Wyłącz przycisk "Start"
  startButton.disabled = true;
  
  // Uruchom interwał zmieniający kolor co sekundę
  intervalId = setInterval(() => {
    // Ustaw nowy kolor tła body
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Obsługa kliknięcia przycisku "Stop"
stopButton.addEventListener('click', () => {
  // Włącz przycisk "Start"
  startButton.disabled = false;
  
  // Zatrzymaj interwał zmieniający kolor
  clearInterval(intervalId);
});

