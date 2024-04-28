# goit-js-hw-09
Zadanie moduł 9 - Asynchroniczność

Kryteria akceptacji

Utworzono repozytorium goit-js-hw-09.
Zadanie domowe zawiera dwa linki dla każdego projektu: do plików źródłowych i strony roboczej na GitHub Pages.
W konsoli podczas otwierania aktywnej strony zadania nie występują błędy ani ostrzeżenia.
Projekt został utworzony przy użyciu szablonu parcel-project-template.
Kod jest sformatowany przy użyciu Prettier.


Pliki startowe

Pobierz pliki startowe z gotowymi znacznikami, stylami i połączonymi plikami dla każdego zadania. Skopiuj je do swojego projektu, całkowicie zastępując folder src w parcel-project-template.



Zadanie 1 - przełącznik kolorów

Wykonaj to zadanie w plikach 01-color-switcher.html і 01-color-switcher.js. Obejrzyj film demonstracyjny przełącznika.







HTML zawiera przyciski «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>




Napisz skrypt, który po naciśnięciu przycisku «Start» raz na sekundę zmienia kolor tła <body> na losową wartość przy użyciu stylu inline. Po naciśnięciu przycisku «Stop» zmiana koloru tła powinna zostać zatrzymana.



👉 UWAGA!
Pamiętaj, że przycisk «Start» można kliknąć nieskończoną ilość razy. Upewnij się, że podczas zmiany motywu przycisk «Start» jest nieaktywny (disabled).


Aby wygenerować losowy kolor, użyj funkcji getRandomHexColor.



function getRandomHexColor() {  
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}