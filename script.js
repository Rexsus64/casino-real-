
"use strict";

let counter = 0;

// Funkcja zamawiania czołgu
function addCzolg() {
    counter++;
    document.getElementById("counter-display").textContent = counter;
}

// Funkcja dodawania punktu
function addPoint() {
    counter++;
    document.getElementById("counter-display").textContent = counter;
}

// Tablica elementów do losowania
let items = [
    "czolg",
    "1 zlyty",
    "35 herbatniki haribo",
    "michael jordan",
    "serowe drzwi",
    "slina wiewiurki"
];

// Funkcja losowania
function drawItem() {
    let i = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[i];
}
