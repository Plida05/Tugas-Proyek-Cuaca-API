# Aplikasi Data Cuaca Jakarta

Tugas praktikum pemrograman web — menampilkan prakiraan cuaca Jakarta dari API Open-Meteo menggunakan HTML, CSS, dan JavaScript.

## Cara Menjalankan

1. Download atau clone repository ini
2. Buka `index.html` di browser

> Atau pakai ekstensi **Live Server** di VS Code.

## Teknologi

- HTML, CSS, JavaScript
- [Open-Meteo API](https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m)

## Struktur File
praktikum-cuaca/
├── index.html
├── style.css
└── script.js

## Cara Kerja

`fetch()` mengambil data JSON dari Open-Meteo secara async. Data waktu dan suhu dari `hourly` lalu diproses JavaScript dan ditulis ke tabel HTML lewat perulangan `for`. Hanya 10 data pertama yang ditampilkan, dengan format waktu dikonversi ke format Indonesia — contoh: `18 Mei 2026 | 00.00 WIB`.


**Nama:** [Rr Nabila Fatharani Yuwvrida]  
**NIM:** [050170901]
