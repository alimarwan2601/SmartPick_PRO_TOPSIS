# SmartPick

Sistem Rekomendasi Smartphone menggunakan metode TOPSIS.

## Struktur

- `index.html` — struktur halaman
- `style.css` — tampilan
- `script.js` — dataset dan algoritma TOPSIS

## Fitur

- Filter merek (semua merek atau satu merek)

- Input budget maksimum
- Filter kandidat berdasarkan budget
- Bobot kepentingan 1–4
- 5 kriteria:
  - Harga (Cost)
  - Performa (Benefit)
  - Kamera (Benefit)
  - Baterai (Benefit)
  - Layar (Benefit)
- Perhitungan TOPSIS
- Ranking dan rekomendasi utama
- Analisis sensitivitas seluruh 1.024 kombinasi bobot

## Catatan data

Dataset mengikuti dataset SmartPick v1.1 yang digunakan dalam proyek. Skor kamera dan layar merupakan feature-based score yang dirancang untuk kebutuhan sistem, bukan klaim kualitas absolut.


## Batas budget

- Budget minimum: Rp1.000.000
- Budget maksimum: Rp10.000.000 (rentang dataset saat ini)
- Validasi ada di input HTML dan JavaScript.