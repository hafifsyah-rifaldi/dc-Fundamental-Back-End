# Pendahuluan Normalisasi Database

Sekarang Notes API kita sudah memiliki layer keamanan dalam mengakses resource catatan. Selain itu, saat ini catatan yang disimpan sudah bersifat privat, alias hanya pengguna yang memiliki catatan tersebut yang dapat mengelolanya. Satu fitur dambaan selesai juga!

Nah, karena saat ini catatan bersifat privat, pengelolaanya sudah tidak bisa dilakukan oleh banyak pengguna lagi. Pengguna kembali mengajukan permintaan baru, yakni fitur kolaborasi. Di mana ia ingin catatan yang ia buat, dapat diakses oleh beberapa pengguna lain yang ia kehendaki. Wah, makin kompleks yah permintaan pengguna kali ini.

Seperti yang Anda ketahui, Notes Apps V2 saat ini sudah memiliki fitur untuk menambahkan kolaborasi. Namun fitur tersebut belum bisa digunakan karena Notes API belum siap. Nah, di modul ini kita akan membuat fitur kolaborasi berfungsi dengan baik sehingga kita bisa merilis dengan fitur lengkap Notes Apps V2 ke publik. Yeay!

Sebagai gambaran awal, setelah kita menyelesaikan modul ini, fitur kolaborasi Notes Apps V2 akan berfungsi seperti ini: <br/>

- [Notes Apps Collaboration Feature](https://youtu.be/N92AfRLwSVg) <br/>

Namun ketahuilah, untuk membuat fitur kolaborasi catatan bukan hal yang mudah. Untuk membangun fitur tersebut, Anda harus paham dan siap dengan relasi antar tabel di database. Anda harus memiliki bekal dan pengetahuan mengenai normalisasi database guna mampu mendesain tabel dengan baik.

Jangan khawatir, di modul ini juga selain membangun fitur kolaborasi, tentu akan diajarkan dasar, teknik, dan tahapan dalam melakukan normalisasi database. Hingga, pada akhir modul ini diharapkan Anda dapat:

- Mengetahui bentuk tabel yang tidak normal
- Mengetahui tahapan normalisasi tabel
- Mengetahui constraints Foreign Keys
- Mengetahui penggunaan kueri JOIN dalam mendapatkan data lebih dari satu tabel
- Menerapkan relasi pada tabel users dan notes
- Membangun fitur kolaborasi catatan dengan teknik normalisasi

## Ikhtisar Normalisasi Database

Anda berada di akhir dari modul Normalisasi Database. Mari kita uraikan apa saja kemampuan yang seharusnya sudah Anda miliki.

- Mengetahui bentuk tabel yang tidak normal
- Mengetahui tahapan normalisasi tabel
- Mengetahui constraints Foreign Keys
- Mengetahui penggunaan kueri JOIN dalam mendapatkan data lebih dari satu tabel
- Menerapkan relasi pada tabel users dan notes
- Membangun fitur kolaborasi catatan dengan teknik normalisasi

## Referensi

- [Constraint Foreign Key Database Postgresql](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK)
