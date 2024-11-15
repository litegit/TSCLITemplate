/*
    Sie können blessed verwenden, um zur Laufzeit aktualisierende Telemetriedaten in Tabellenform auf der Konsole auszugeben. Hier ist ein Beispiel, wie Sie dies in TypeScript umsetzen können:
    Installieren Sie die notwendigen Abhängigkeiten:
    ```
    npm install blessed @types/blessed
    ```
    Kompilieren Sie den TypeScript-Code:
    ```
    tsc src/telemetry.ts --outDir dist
    ```
    Führen Sie die kompilierte JavaScript-Datei aus:
    ```
    node dist/telemetry.js
    ```
    Dieses Beispiel zeigt, wie Sie eine Tabelle erstellen und die Telemetriedaten alle 0,5 Sekunden aktualisieren können. Sie können die Telemetriedaten nach Bedarf anpassen.
 */
// src/telemetry.ts
import blessed from 'blessed';

// Erstellen Sie ein Bildschirmobjekt
const screen = blessed.screen({
    smartCSR: true
});

screen.title = 'Telemetrie-Daten';

// Erstellen Sie eine Tabelle
const table = blessed.listtable({
    top: 'center',
    left: 'center',
    width: '80%',
    height: '50%',
    border: { type: 'line' },
    align: 'center',
    tags: true,
    keys: true,
    vi: true,
    style: {
        header: { fg: 'blue', bold: true },
        cell: { fg: 'white', selected: { bg: 'blue' } }
    }
});

// Fügen Sie die Tabelle zum Bildschirm hinzu
screen.append(table);

// Funktion zum Aktualisieren der Telemetriedaten
function updateTelemetry() {
    // Beispielhafte Telemetriedaten
    const telemetryData = [
        ['Metric', 'Value'],
        ['CPU Usage', `${Math.random().toFixed(2)}%`],
        ['Memory Usage', `${(Math.random() * 100).toFixed(2)} MB`],
        ['Disk I/O', `${(Math.random() * 100).toFixed(2)} MB/s`]
    ];

    // Aktualisieren Sie die Tabelle
    table.setData(telemetryData);

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