# SmartPick

Sistem Rekomendasi Smartphone menggunakan metode TOPSIS.

## Menjalankan di VS Code

1. Ekstrak ZIP ini.
2. Buka folder `SmartPick` di VS Code.
3. Buka `index.html`.
4. Klik kanan → **Open with Live Server** jika extension Live Server sudah terpasang.
5. Atau buka `index.html` langsung melalui browser.

Tidak membutuhkan database, Node.js, atau Python untuk menjalankan versi ini.

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


## Detail spesifikasi smartphone (v1.3)

- Tombol **Detail** pada tabel ranking dan **Lihat detail spesifikasi** pada rekomendasi utama membuka informasi RAM, storage, chipset/prosesor, dan baterai.
- RAM, storage, dan chipset hanya informasi produk; **tidak digunakan dalam rumus TOPSIS**.
- Konfigurasi RAM/storage bisa berbeda menurut wilayah dan varian. Beberapa entri sengaja ditandai perlu verifikasi apabila data varian belum dapat dipastikan.
- Untuk laporan akademik, cek kembali spesifikasi terhadap laman resmi produsen/varian yang dipakai dan cantumkan sumber serta tanggal akses.
