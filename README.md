# Minification_and_TreeShaking

Hier sollten alle Dateien zu TreeShaking enthalten sein.

Zunächst sei gesagt, dass auch auf anderen Wegen als webpack Treeshaking möglich ist, aber hier beziehe ich mich auf webpack2.

Nach Installation von webpack muss man lokal sein Projekt initialisieren ("npm init -y").
Außerdem müssen ein paar Abhänigkeiten installiert werden ("npm i --save-dev webpack@beta html-webpack-plugin").
Jetzt kann das Projekt erstellt werden, wobei einige Funktionen exportiert bzw importiert werden, sodass später in der gebündelten Datei nur die nötigen Funktionen existieren.

Schließlich ist noch eine Konfigurationsdatei sehr hilfreich, welche im root-Ordner des Projekts liegen sollte und den namen "config.js" tragen muss. Die einfachste Version ist in diesem Branch unter config_simple.txt zu finden, diese definiert Standardinput sowie -output. Somit kann später das ganze nur mit dem Befehl "webpack" ausgeführt werden. 
Diese Datei kann erweitert werden, zum Beispiel mit Babel (welches auch noch installiert werden muss "npm i --save-dev babel-core babel-loader babel-preset-es2015") welches später die Kompatibilität mit den verschiedenen Browsern und JavaScript-Versionen ermöglicht. (Konfigurationsdatei "config_babel.txt"). 
Dadurch existiert leider keine feste Structur mehr und es kann nicht mehr gut gekürzt werden, daer muss noch eine Option ergänt werden in der Konfiguration um es weiter zu optimieren. Dafür muss ein Preset gesetzt werden: " 'es2015', {modules: false} "
Die finale Konfigurationsdatei ist dann somit "config_final.txt"
