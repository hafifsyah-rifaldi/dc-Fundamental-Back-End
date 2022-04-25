# Pendahuluan Storage dengan Amazon S3

Pada modul kali ini kita akan mengupas tuntas tentang storage alias penyimpanan. Tapi sebelum ke sana, mari kita lihat kondisi dari aplikasi Notes Apps terlebih dahulu.

Seperti yang kita ketahui, sekarang aplikasi Notes Apps sudah menggunakan database untuk menyimpan data secara persisten. Memang, ini adalah hal yang bagus. Namun, tahukah Anda? Adakalanya, data yang disimpan pada server tidaklah berbentuk data terstruktur saja, melainkan berkas atau objek seperti gambar, audio, video, dll.

Begitu juga yang terjadi pada aplikasi Notes Apps kita. Seiring berkembangnya aplikasi tersebut, kebutuhan pengguna pun semakin beragam. Pengguna aplikasi Notes Apps menginginkan hadirnya fitur untuk menyimpan gambar pada catatan agar membuat mereka semakin produktif.

Tentu, database bukanlah solusi yang tepat untuk masalah ini. Maka dari itu, kita memerlukan solusi lain yang dapat digunakan untuk menyimpan berkas atau objek secara utuh. Tenang, selalu ada jalan keluar untuk setiap masalah. Untuk masalah tersebut, kita bisa menyediakan storage alias penyimpanan.

Nah, di modul ini, kita akan belajar menggunakan solusi storage untuk menyimpan objek atau berkas pada aplikasi Notes Apps. Dengan begitu, di akhir modul ini Anda diharapkan dapat:

- Mengerti fungsi storage.
- Mengetahui bagaimana cara menulis dan membaca berkas pada storage lokal.
- Melayani permintaan menggunakan berkas statis di Hapi.
- Mengetahui cara menyimpan dan menggunakan berkas dari storage dari Amazon S3.
- Mengimplementasikan storage pada RESTful API.

## Ikhtisar Storage dengan Amazon S3

Anda berada di akhir dari modul Storage dengan Amazon S3. Mari kita uraikan apa saja kemampuan yang seharusnya sudah Anda miliki.

- Mengerti fungsi storage.
- Mengetahui bagaimana cara menulis dan membaca berkas pada storage lokal.
- Melayani permintaan menggunakan berkas statis di Hapi.
- Mengetahui cara menyimpan dan menggunakan berkas dari Amazon S3.
- Mengimplementasikan storage pada RESTful API.

## Referensi

- [dokumentasi resmi tentang mkdirSync](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_options)
