/*
    Um Telemetriedaten in der Konsole als Grafik darzustellen, können Sie die Bibliothek blessed-contrib verwenden, die auf blessed aufbaut und verschiedene grafische Widgets bietet. Hier ist ein Beispiel, wie Sie dies in TypeScript umsetzen können:
    Installieren Sie die notwendigen Abhängigkeiten:
    ```
    npm install --save-dev blessed blessed-contrib @types/blessed
    ```
    Kompilieren Sie den TypeScript-Code:
    ```
    tsc src/telemetry.ts --outDir dist
    ```
    Führen Sie die kompilierte JavaScript-Datei aus:
    ```
    node dist/telemetry.js
    ```
 */

// src/telemetry.ts
import blessed from 'blessed';
import contrib from 'blessed-contrib';

// Erstellen Sie ein Bildschirmobjekt
const screen = blessed.screen({
    smartCSR: true
});

screen.title = 'Telemetrie-Daten';

// Erstellen Sie ein Line-Chart
const line = contrib.line({
    width: '80%',
    height: '50%',
    top: 'center',
    left: 'center',
    border: { type: 'line' },
    style: {
        line: 'yellow',
        text: 'green',
        baseline: 'black'
    },
    xLabelPadding: 3,
    xPadding: 5,
    label: 'Telemetrie-Daten'
});

// Fügen Sie das Line-Chart zum Bildschirm hinzu
screen.append(line);

// Beispielhafte Telemetriedaten
const data = {
    title: 'CPU Usage',
    x: ['t1', 't2', 't3', 't4', 't5'],
    y: [30, 50, 70, 40, 60]
};

// Funktion zum Aktualisieren der Telemetriedaten
function updateTelemetry() {
    // Neue zufällige Daten generieren
    data.y.shift();
    data.y.push(Math.random() * 100);

    // Aktualisieren Sie das Line-Chart
    line.setData([data]);

    // Rendern Sie den Bildschirm
    screen.render();
}

// Aktualisieren Sie die Telemetriedaten alle 2 Sekunden
setInterval(updateTelemetry, 500);

// Beenden Sie das Programm bei Drücken der Escape-, q- oder Strg-C-Taste
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
    return process.exit(0);
});

// Rendern Sie den Bildschirm initial
screen.render();