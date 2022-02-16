# Steuerungshinweis
F8 = Speichern des Spielstands
F9 = Laden eines Spielstands
F10 = Menü öffnen

# Github-Pages Link
https://dykunxv.github.io/Visual-Novel/Template/Template.html

# Quellcode
https://github.com/DykunXV/Visual-Novel/tree/main/Template/Source/Scenes

# Konzept-Dokument
https://github.com/DykunXV/Visual-Novel/blob/main/Konzeption.pdf

# Gepacktes Archiv
https://github.com/DykunXV/Visual-Novel/blob/main/VisualNovelAbgabe_DennisFischer.zip

## Bewertungskriterien
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 | A Certain Wish
|    | Name                  | Dennis Fischer
|    | Matrikelnummer        | 260531
|  1 | Konzeption     | In der Konzeption findet sich eine Inhaltsangabe, alle Charaktere, ein Drehbuch für alle Szenen und ein Flowchart Diagram.                                                                                                                            |
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