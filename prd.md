# Product Requirements Document (PRD)
## Website Portfolio — Ariq Alfalah

**Versi:** 1.0  
**Tanggal:** 25 Oktober 2026  
**Status:** Draft untuk implementasi  
**Pemilik Produk:** Ariq Alfalah  
**Repository:** https://github.com/Ariq04/web-portofolio  
**Website saat ini:** https://ariq04.github.io/web-portofolio/

---

## 1. Ringkasan Produk

Website portofolio Ariq Alfalah akan diperbarui menjadi website profesional yang menampilkan profil, kemampuan teknis, proyek nyata, pengalaman, sertifikasi, dan informasi kontak dalam satu tempat.

Website harus mendukung tiga tujuan utama:
1. **Mendukung pencarian kerja** di bidang Data Analytics, Business Intelligence, dan AI Application Development.
2. **Menampilkan bukti kemampuan teknis** melalui proyek, studi kasus, screenshot, teknologi yang digunakan, dan tautan demo atau repository.
3. **Menarik calon klien dan kolaborator** yang membutuhkan solusi analitik data, dashboard, integrasi API, atau aplikasi berbasis AI.

Fokus pembaruan bukan hanya mempercantik tampilan, tetapi juga meningkatkan kejelasan informasi, kredibilitas proyek, pengalaman pengguna, dan kemudahan menghubungi pemilik portofolio.

## 2. Latar Belakang dan Masalah

Website yang ada perlu ditinjau dan diperbarui agar lebih relevan dengan kemampuan dan arah karier saat ini. Hal yang perlu diaudit saat implementasi:
- Deskripsi proyek harus menjelaskan masalah, solusi, peran, teknologi, dan hasil secara spesifik.
- Nama proyek dan sertifikasi harus jelas, tidak menggunakan judul generik atau berulang.
- Semua tautan, informasi kontak, dan tombol harus berfungsi.
- Konten harus sesuai dengan proyek yang benar-benar tersedia dan boleh dipublikasikan.
- Desain harus profesional dan nyaman digunakan di desktop maupun perangkat mobile.

Temuan di atas merupakan daftar audit awal; kondisi aktual setiap halaman dan aset perlu diverifikasi langsung di repository sebelum perubahan dilakukan.

## 3. Tujuan Produk

### 3.1 Tujuan Utama
- Memperkenalkan Ariq Alfalah sebagai profesional dengan fokus pada data, business intelligence, dan aplikasi berbasis AI.
- Membuat recruiter dapat memahami profil, skill, dan proyek unggulan dalam waktu singkat.
- Menyediakan bukti kerja yang dapat diperiksa melalui demo, screenshot, dan repository.
- Memudahkan pengunjung mengunduh CV dan menghubungi pemilik portofolio.

### 3.2 Bukan Tujuan (Out of Scope)
Untuk versi MVP, website tidak membutuhkan:
- Sistem login atau akun pengguna.
- Backend khusus atau database.
- CMS atau dashboard admin.
- Fitur transaksi atau pembayaran.
- Chatbot AI langsung di website, kecuali diputuskan sebagai fitur lanjutan.
- Animasi kompleks yang mengorbankan performa dan aksesibilitas.

## 4. Target Pengguna

### 4.1 Recruiter dan HRD
Membutuhkan ringkasan profil, pengalaman, kemampuan, proyek, CV, dan kontak yang mudah ditemukan.

### 4.2 Calon Klien
Membutuhkan contoh hasil kerja, jenis solusi yang dapat dibuat, serta cara menghubungi pemilik portofolio.

### 4.3 Developer dan Kolaborator
Membutuhkan informasi teknis proyek, stack teknologi, repository, demo, serta penjelasan kontribusi pribadi.

## 5. Positioning dan Pesan Utama

### 5.1 Positioning
Ariq Alfalah adalah pengembang solusi berbasis data dan AI yang menggabungkan analitik, visualisasi, integrasi API, dan pengembangan aplikasi untuk menyelesaikan masalah praktis.

### 5.2 Usulan Headline
**Building Data-Driven Applications with AI.**

### 5.3 Usulan Subheadline
I build data-driven applications and AI-powered solutions that turn complex processes into practical digital experiences.

Semua klaim pada profil harus sesuai dengan kemampuan, proyek, dan pengalaman nyata. Hindari mengklaim keahlian atau hasil yang belum dapat dibuktikan.

## 6. Struktur Informasi dan Halaman

Website MVP menggunakan satu halaman utama dengan navigasi menuju section terkait. Detail proyek dapat menggunakan section yang lebih lengkap atau halaman terpisah bila dibutuhkan.

### 6.1 Navigation
Menu:
- Home
- About
- Projects
- Skills
- Experience
- Contact

Persyaratan:
- Navigasi menuju section yang tepat.
- Navigasi mobile dapat dibuka dan ditutup dengan mudah.
- Indikator fokus keyboard terlihat.
- Navigasi tidak menutupi konten saat berpindah section.

### 6.2 Hero / Home
Konten:
- Nama: Ariq Alfalah.
- Headline profesional.
- Subheadline singkat.
- CTA utama: **View Projects**.
- CTA sekunder: **Download CV**.
- Tautan GitHub dan LinkedIn.

Kriteria penerimaan:
- Pengunjung memahami fokus profesional dalam beberapa detik.
- CTA menuju lokasi atau file yang benar.
- Tidak ada teks placeholder.

### 6.3 About
Konten:
- Ringkasan pendidikan Sistem Informasi.
- Minat profesional pada Data Analytics, Business Intelligence, dan AI Application Development.
- Pendekatan membangun solusi: memahami masalah, memproses data, mengembangkan solusi, dan memvalidasi hasil.

Kriteria penerimaan:
- Ringkasan singkat, akurat, dan mudah dibaca.
- Tidak menambahkan pengalaman atau kualifikasi yang belum dikonfirmasi.

### 6.4 Featured Projects
Tampilkan 3–5 proyek terpilih. Setiap kartu proyek berisi:
- Nama proyek.
- Deskripsi satu atau dua kalimat.
- Kategori dan teknologi utama.
- Screenshot atau thumbnail asli proyek.
- Tautan demo bila tersedia.
- Tautan repository bila aman dan publik.

Setiap detail proyek idealnya mencakup:
1. Problem — masalah yang ingin diselesaikan.
2. Approach — pendekatan dan alasan pemilihan solusi.
3. Implementation — bagian yang benar-benar dikerjakan.
4. Validation — pengujian, hasil, dan keterbatasan.
5. Links — demo, repository, atau dokumentasi.

Kandidat proyek awal:
- **Integrated Analytics Dashboard with AI Assistant**  
  Repository: https://github.com/Ariq04/Dashboard-Analitik-Terintegrasi-AI
- **Global Superstore Analytics**  
  Detail teknologi dan hasil perlu dikonfirmasi sesuai implementasi asli.
- **English Self-Assessment**  
  Repository: https://github.com/Ariq04/english-self-assessment  
  Status deployment perlu diperiksa sebelum menampilkan tautan demo.
- **VORIX — AI Agent Project**  
  Hanya boleh ditampilkan jika aturan kompetisi dan status publikasi mengizinkan. Jangan mempublikasikan source code, kredensial, atau detail rahasia.

### 6.5 Skills
Kelompokkan keterampilan ke dalam kategori:
- Programming: Python, SQL.
- Data Analysis: Pandas, data cleaning, exploratory data analysis.
- BI & Visualization: Power BI, Streamlit, dashboard development.
- Database: MySQL/SQLite dan SQLAlchemy jika relevan dengan proyek.
- AI & Integration: Generative AI, LLM/API integration, prompt engineering, LangChain jika benar-benar digunakan.

Ketentuan:
- Hanya tampilkan skill yang benar-benar dipahami atau pernah digunakan.
- Jangan gunakan progress bar persentase tanpa dasar pengukuran yang jelas.
- Hindari menampilkan terlalu banyak logo yang tidak menambah informasi.

### 6.6 Experience and Credentials
Tampilkan pengalaman dan pendidikan yang relevan berdasarkan data yang benar dan dapat diverifikasi.

Konten potensial:
- Pendidikan Sistem Informasi — Universitas Nurdin Hamzah.
- Pengalaman Asisten Laboratorium Komputer.
- Pengalaman administratif/data entry jika relevan dengan target karier.
- Sertifikasi Data Analytics, Generative AI, Data Science, dan sertifikasi lain yang valid.

Setiap sertifikat mencantumkan:
- Nama resmi sertifikat/program.
- Penerbit.
- Tanggal atau tahun.
- Tautan verifikasi jika tersedia.

Jangan mencantumkan sertifikat yang belum dimiliki atau menebak nama resmi yang tidak jelas.

### 6.7 Contact
Konten:
- Email profesional yang telah dikonfirmasi.
- LinkedIn: https://www.linkedin.com/in/ariq-alfalah-483477347
- GitHub: https://github.com/Ariq04
- CTA untuk peluang kerja dan kolaborasi.

Persyaratan:
- Tautan email menggunakan alamat yang sudah dikonfirmasi.
- Semua tautan diuji.
- Tidak menampilkan data pribadi yang tidak ingin dipublikasikan.

### 6.8 Footer
Konten:
- Nama pemilik.
- Tahun hak cipta yang tepat.
- Tautan GitHub dan LinkedIn.
- Navigasi singkat jika berguna.

## 7. Persyaratan Desain UI/UX

### 7.1 Arah Visual
- Modern, minimalis, profesional, dan berorientasi pada proyek.
- Palet utama: charcoal/navy atau putih netral dengan aksen biru/cyan.
- Tipografi sans-serif yang mudah dibaca.
- Ruang kosong yang cukup; hindari layout padat.
- Konsistensi radius, jarak, ukuran heading, tombol, dan kartu.
- Gunakan screenshot proyek asli sebagai bukti kerja.

Tema dark atau light dapat dipilih setelah memeriksa aset dan struktur website yang ada. Jika implementasi tema ganda menambah kompleksitas, prioritaskan satu tema yang konsisten.

### 7.2 Responsivitas
Website harus mendukung:
- Mobile: 320–767 px.
- Tablet: 768–1023 px.
- Desktop: 1024 px ke atas.

Kriteria:
- Tidak ada horizontal overflow.
- Kartu proyek menyesuaikan lebar layar.
- Ukuran font dan tombol nyaman dibaca dan digunakan.
- Navigasi mobile berfungsi.
- Gambar tidak terdistorsi.

### 7.3 Motion dan Interaksi
- Transisi hover yang ringan.
- Animasi masuk sederhana bila tidak mengganggu.
- Hormati preferensi `prefers-reduced-motion`.
- Hindari parallax berat, animasi berulang yang tidak perlu, dan efek yang memperlambat pemuatan.

### 7.4 Aksesibilitas
- Struktur heading semantik.
- Alt text untuk gambar bermakna.
- Kontras teks yang memadai.
- Fokus keyboard terlihat.
- Semua kontrol interaktif dapat digunakan dengan keyboard.
- Tautan memiliki label yang jelas.

## 8. Persyaratan Fungsional

| ID | Persyaratan | Prioritas |
|---|---|---|
| FR-01 | Navigasi menuju seluruh section utama | Must |
| FR-02 | Hero dengan CTA proyek dan CV | Must |
| FR-03 | Kartu proyek dengan deskripsi, stack, dan link | Must |
| FR-04 | Tombol unduh/buka CV yang berfungsi | Must |
| FR-05 | Tautan GitHub, LinkedIn, dan email | Must |
| FR-06 | Layout responsif untuk mobile, tablet, desktop | Must |
| FR-07 | Detail studi kasus proyek | Should |
| FR-08 | Filter proyek berdasarkan kategori | Should |
| FR-09 | Dark/light mode | Could |
| FR-10 | Analytics pengunjung yang menghormati privasi | Could |

## 9. Persyaratan Nonfungsional

### Performance
- Optimalkan ukuran gambar.
- Gunakan format gambar modern bila didukung.
- Hindari library besar jika tidak diperlukan.
- Minimalkan JavaScript dan CSS yang tidak digunakan.
- Target Core Web Vitals yang baik; ukur dengan alat pengujian setelah deployment.

### SEO
- Judul halaman dan meta description yang spesifik.
- Open Graph metadata untuk preview tautan.
- Favicon yang sesuai.
- Heading terstruktur.
- Tautan deskriptif.
- Sitemap atau robots file jika sesuai dengan arsitektur hosting.

### Security and Privacy
- Jangan menyimpan API key, token, password, atau kredensial dalam repository publik.
- Jangan memublikasikan data pribadi atau data perusahaan yang bersifat rahasia.
- Periksa status publikasi proyek sebelum menautkannya.
- Gunakan tautan eksternal yang valid dan dapat dipercaya.

### Maintainability
- Struktur kode mudah dipahami.
- Konten proyek, skill, dan pengalaman mudah diperbarui.
- Komponen berulang dibuat konsisten.
- Tidak ada dependensi yang tidak diperlukan.
- Perubahan dapat dilacak melalui Git.

## 10. Acceptance Criteria

Website memenuhi MVP apabila:
1. Semua navigasi utama mengarah ke section yang benar.
2. Tidak ada placeholder atau tautan kosong.
3. Semua CTA penting dapat digunakan.
4. CV dapat dibuka atau diunduh.
5. Minimal tiga proyek ditampilkan dengan deskripsi yang akurat.
6. Setiap proyek hanya menampilkan teknologi dan hasil yang benar-benar relevan.
7. Website dapat digunakan pada mobile, tablet, dan desktop tanpa horizontal overflow.
8. Tidak ada kredensial atau informasi proyek rahasia di repository publik.
9. Gambar, teks, dan kontrol interaktif memiliki aksesibilitas dasar.
10. Deployment GitHub Pages berhasil dan URL website tetap dapat diakses.
11. Tidak ada error kritis pada navigasi, aset, atau tautan utama.
12. Konten profil, pengalaman, dan sertifikasi telah diverifikasi oleh pemilik portofolio.

## 11. Rencana Implementasi

### Tahap 1 — Audit
- Periksa repository dan struktur HTML/CSS/JavaScript yang ada.
- Identifikasi aset yang masih layak digunakan.
- Periksa semua link, placeholder, dan deployment.
- Catat fitur yang perlu dipertahankan atau diperbaiki.

### Tahap 2 — Desain
- Tetapkan palet warna, tipografi, spacing, dan komponen.
- Rancang hero, kartu proyek, skills, experience, dan contact.
- Pastikan desain bekerja pada mobile dan desktop.

### Tahap 3 — Implementasi MVP
- Bangun ulang atau refactor struktur berdasarkan hasil audit.
- Implementasikan navigasi dan section utama.
- Masukkan konten dan aset yang telah diverifikasi.
- Pastikan CTA, link, dan CV bekerja.

### Tahap 4 — Konten dan Validasi
- Tulis studi kasus untuk proyek unggulan.
- Periksa akurasi teknologi dan kontribusi.
- Optimalkan gambar.
- Uji aksesibilitas, responsivitas, dan tautan.

### Tahap 5 — Deployment
- Commit perubahan secara terstruktur.
- Jalankan pemeriksaan akhir.
- Deploy ke GitHub Pages.
- Buka URL publik dari desktop dan ponsel untuk verifikasi.

## 12. Indikator Keberhasilan

Target internal untuk versi pertama:
- 0 tautan utama yang rusak.
- 0 placeholder yang tertinggal.
- 3–5 proyek unggulan yang relevan.
- 100% proyek yang ditampilkan memiliki deskripsi akurat.
- Semua CTA utama berfungsi.
- Tidak ada horizontal overflow pada ukuran layar yang diuji.
- CV dan informasi kontak mudah ditemukan.
- Website dapat diakses melalui GitHub Pages.

Target ini adalah kriteria penerimaan yang akan diuji, bukan klaim tentang performa website saat ini.

## 13. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Konten proyek kurang jelas | Gunakan format studi kasus Problem–Approach–Implementation–Validation |
| Proyek belum siap dipublikasikan | Sembunyikan sementara atau tampilkan deskripsi yang diizinkan |
| Link demo tidak aktif | Verifikasi setiap link sebelum deployment |
| Desain terlalu ramai | Prioritaskan keterbacaan, ruang kosong, dan bukti proyek |
| Performa lambat karena animasi/gambar | Optimalkan aset dan kurangi efek yang tidak penting |
| Klaim skill berlebihan | Tampilkan hanya kemampuan yang dapat dijelaskan dan dibuktikan |
| Perubahan merusak website saat ini | Audit repository, gunakan Git, dan uji sebelum deployment |

## 14. Asumsi dan Hal yang Perlu Dikonfirmasi

- Website tetap menggunakan GitHub Pages untuk hosting.
- Repository saat ini menjadi titik awal audit; keputusan refactor atau rebuild dibuat setelah kode diperiksa.
- Email publik dan file CV final akan disediakan atau dikonfirmasi oleh pemilik.
- Screenshot proyek akan menggunakan hasil aplikasi asli.
- Status demo dan keterbukaan repository diperiksa sebelum publikasi.
- Proyek VORIX tidak akan dipublikasikan jika masih dibatasi oleh aturan kompetisi atau kewajiban kerahasiaan.

## 15. Definition of Done

Pembaruan portofolio dinyatakan selesai setelah seluruh acceptance criteria MVP terpenuhi, perubahan diuji pada perangkat dan browser yang relevan, konten diverifikasi, tidak ada informasi rahasia yang terpublikasi, dan versi terbaru berhasil di-deploy ke:

https://ariq04.github.io/web-portofolio/

---

**Dokumen ini adalah PRD untuk versi MVP.** Keputusan teknis akhir—termasuk apakah website perlu dibangun ulang atau cukup direfactor—harus dibuat setelah audit repository dan aset yang ada.
