# Proyek Message Broker, Storage, dan Cache

Selamat! Akhirnya Anda telah sampai di penghujung pembelajaran. Anda telah mempelajari:

- Memahami Message Broker.
- Menggunakan RabbitMQ sebagai Message Broker.
- Mengimplementasikan Message Broker ke Proyek Back-End.
- Menulis dan Membaca Berkas pada Storage Lokal.
- Melayani Permintaan Menggunakan Berkas Statis di Hapi.
- Mengetahui Cara Menyimpan dan Menggunakan Berkas dari Amazon S3.
- Memahami Konsep Cache.
- Mengetahui Cara Memasang Redis secara Lokal.
- Menggunakan Redis untuk Caching Pada RESTful Api.

Tentu Anda juga sudah mengerjakan seluruh latihan yang diberikan pada modul-modul tersebut.

Untuk menuju lulus dari kelas ini, Anda harus mengerjakan tugas yakni membuat proyek OpenMusic API versi 3 sesuai kriteria yang akan disampaikan nanti. Tim Reviewer akan memeriksa pekerjaan Anda dan memberikan reviu pada proyek yang Anda buat.

# Studi Kasus

Semenjak dirilisnya OpenMusic versi 2, pengguna OpenMusic semakin membludak. Mereka sangat antusias akan kehadiran platform pemutar musik gratis. Kehadiran fitur playlist membuat mereka nyaman menggunakan OpenMusic. Bahkan, mereka tidak segan untuk membagikan dan merekomendasikan OpenMusic hingga akhirnya melejit!

Karena pengguna OpenMusic semakin banyak, server kita seringkali mengalami down. Terutama pada server database yang selalu bekerja keras dalam menangani permintaan kueri playlist dari ribuan pengguna. Hingga akhirnya tim TSC memutuskan untuk menerapkan server-side caching pada OpenMusic API untuk mengurangi pekerjaan database.

Pengembangan OpenMusic versi 3 segera tiba dan ini adalah kontribusi terakhir Anda pada platform OpenMusic. Tim TSC kembali melakukan survey fitur apa yang hendak dibawa pada versi ke-3 ini. Hasilnya menunjukkan pengguna menginginkan fitur ekspor daftar lagu yang berada di playlist. Selain itu, mereka juga menginginkan hadirnya fitur upload gambar untuk sampul album.

Tugas terakhir Anda adalah mengembangkan OpenMusic API versi 3 dengan menerapkan server-side caching, fitur ekspor serta upload gambar sesuai spesifikasi yang dijelaskan di bawah ini.
