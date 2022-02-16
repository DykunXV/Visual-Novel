# FUDGE_Story
A FUDGE module for the easy development of interactive stories, visual novels and simple adventure games


# Reference
- [APIs](https://jirkadelloro.github.io/FUDGE_Story/Documentation/Reference/#fudge-story-reference)

## Bewertungskriterien
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 |
|    | Name                  |
|    | Matrikelnummer        |
|  1 | Konzeption     | In der Konzeption findet sich eine Inhaltsangabe, alle Charaktere, alle Szenen und ein Flowchart Diagram.                                                                                                                            |
|  2 | Charakter-Konzept     | Archetypen kommen vor. Diese sind in der Konzeption bei den Charakteren genannt.                                                                                                                                                                                |
|  3 | Auswahlmöglichkeiten | Der Spieler hat viele verschiedene Möglichkeiten die Story zu verändern und ihn erwartet beim Spielen quasi jedes mal ein anderer Weg zum Ende.                                                                                                                                                     |
|  4 | Branching narratives      | Die Variablen, die ich benutze, um zu entscheiden welcher Variante einer Szene der Spieler sieht, sind firstSpellSpoken: boolean, secondSpellSpoken: boolean; thirdSpellSpoken: boolean und reprehensibility: number.                                                                                                                                                          |
|  5 | Transitions            | Es gibt verschiedene Transitions. Beispielweise gibt es verschiedene Transitions, wenn der Spieler von einer Location in der Realität zu einer Location im Traum wechselt, als wenn der Spieler von einer Location in der Realität zu einer anderen Location in der Realität wechselt.                                                                                                                                                 |
|  6 | Novel-Pages            | Novel Pages sind vorhanden uns informieren den Spieler, wenn er reprehensibility: number erhält. Zudem tauchen Novel Pages auf, wenn eine Aktion fehlschlägt, weil der Spieler zu wenig reprehensibility: number besitzt.                                                                                                                                                          |
|  7 |         Audio         | Musik und Soundeffekte sind vorhanden. In der Regel besitzt jede Location ihre eigene passende Musik. Soundeffekte werden z.B. dann eingespielt, wenn das Handy eines Charakters klingelt, oder die Schulklingel läutet.                                                                                                                                                    |
|  8 |         GUI            | Das Hauptmenü, dass der Spieler durch drücken von F10 aufrufen kann, erlaubt ihm das Spiel zu Speichern und zu Laden.                                                                                                                                                                    |
|  9 | Input-Feld(er)          | Es ist ein Input-Feld am Anfang der Story vorhanden, dass dem Spieler erlaubt seinen Namen auszuwählen.                                                                                                                                                                   |
|  10 | Punkteverteilungssystem     | Der Spieler kann im Laufe des Spiels reprehensibility: number gewinnen oder verlieren, je nachdem wie er handelt. Handelt er für egoistisch, erhält er Punkte. Handelt er nicht egoistisch, verliert er Punkte.                                                                                                                                                             |
|  11 | Inventory- und Item-System     | Es ist kein Inventarsystem vorhanden.                                                                                                                                                                 |
| 12 | Animation     | Es wurden verschiedene Animationen benutzt, durch die sich Charakter im Screen bewegen. Beispielweise bewegt sich ein Charakter an den Rand des Screens, um Platz für einen anderen Charakter zu machen, der auftauscht. Oder ein Charakter kommt außerhalb des Screen in den Screen gerannt.                                                                                                                                                                 |
| 13 | Styling          | Ich habe sehr viel Wert auf CSS gelegt und alles was verändert werden konnte, wurde auch verändert. Buttons, Text, Menüs und so weiter.                                                                                                                                                                                 |
| 14 | Enden          | Es gibt drei verschiedene Spielenden, die davon abhängen, ob der Spieler Zaubersprüche benutzt hat und wie viel reprehensibility: number er angesammelt hat. Der Spieler erhält Informatione, wie er die anderen Enden erreicht, nachdem er ein Ending erreicht hat.                                                                                                                                                                               |
<br>

##  Abgabeformat

* Die Konzeption soll als .pdf-Dokument abgegeben werden.
* Platziere einen Link in der Readme-Datei deines VisualNovel-Repositories auf Github auf die fertige und in Github-Pages lauffähige Anwendung.
* Platziere ebenso Links zu den Stellen in deinem Repository, an denen der Quellcode und das Konzept-Dokument zu finden sind.
* Stelle zudem auf diese Art dort auch ein gepacktes Archiv zur Verfügung, welches folgende Daten enthält
  * Das Konzept-Dokument 
  * Die Projektordner inklusive aller erforderlichen Dateien, also auch Bild- und Audiodaten