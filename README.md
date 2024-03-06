# React + TypeScript + Vite

1. En ny komponent ChangeText innehåller ett input-fält för text, en knapp och en p-tagg. När man klickar på knappen så kopieras texten från input till p-taggen.
   UTMANING: Ändra "kopiera" till "flytta" dvs inputfältet töms. Sätt även fokus tillbaka på inputfältet. Om textfältet är tomt ska inte p-taggen ändras.

2. En ny komponent Addition som har två inputfält och en knapp samt en p-tagg. När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
   UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten. Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet. Se till att taborder är korrekt.

3. Skapa komponenten ColorBox som innehåller ett textfält, en knapp och en div. När användaren klickar på knappen ska diven få den färgen som användaren skrivit i textfältet.
   UTMANING: Användaren får bara skriva korrekta och fungerande hexadecimala värden i textfältet.

4. Skapa komponenten List som har ett textfält, knapp och ul. När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.
   UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.
   UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan.

5. Skapa komponenten PrettyText som har: textfält, kryssrutor, knapp och p-tagg. Kryssrutorna har olika val: fet stil, kursiv och textstorlek större (dvs ett kryssalternativ som sätter textstorleken till en större storlek). Användaren skriver en text och klickar i sina val sen klickar på knappen. Då visas texten ifrån textfältet i p-taggen och valen i kryssrutorna formaterar texten.
   UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir bakgrundsfärg på texten.
   UTMANING: Lägg till en till textruta där användaren kan skriva i en färg som sedan blir färgen på texten.
   UTMANING: Lägg till fler kryssrutealternativ: bara små bokstäver (dvs texten formatteras till bara små bokstäver), bara stora bokstäver, understruken text, omvänd text (dvs ordet spegelvänds så man läser det baklänges).
   UTMANING: Lägg till en Ångra-knapp, dvs en knapp som om man klickar på den ändrar texten tillbaka till det som den var innan. Man ska bara kunna ångra den senaste ändringen.

6. 🍕 Gör en komponent PizzaCalculator som har ett inputfält för antal pizzor och en knapp samt p-tagg. Användaren fyller i antal pizzor hen vill ha och klickar på knappen. Priset räknas ut utifrån antal och totalen visas i p-taggen.
   UTMANING: Lägg till tre radioknappar för olika storlekar på pizzorna. Priset räknas ut utifrån storlek och antal.
   UTMANING: Lägg till extra toppings med kryssrutor som påverkar priset.

7. Gör en komponent PlusMinus som har två textfält med en dropdown mellan samt en knapp och en p-tagg. Användaren ska kunna skriva en siffra i fälten och välja plus eller minus i dropdownen. När användaren klickar på knappen så utförs beräkningen och resultatet visas i p-taggen.
