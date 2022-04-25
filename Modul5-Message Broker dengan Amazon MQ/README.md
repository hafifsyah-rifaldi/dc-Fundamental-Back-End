# Pendahuluan Message Broker dengan Amazon MQ

Selamat datang di modul Message Broker dengan Amazon MQ! Di modul kali ini kita akan belajar sesuatu yang cukup menarik. Apakah itu? Eits, sebelum ke sana, mari kita ulas terlebih dahulu apa saja yang telah dipelajari sejauh ini.

Sampai tahap ini, aplikasi Notes Apps kita telah berkembang menjadi semakin mantap dan aman. Kita telah menerapkan database agar dapat menyimpan data secara persisten dan menambahkan lapisan keamanan dengan authentication dan authorization.

Tentu, ini adalah hal yang bagus. Sekarang aplikasi Notes Apps kita semakin populer. Seiring meningkatnya jumlah pengguna yang menggunakan aplikasi kita, kebutuhan pun semakin beragam. Banyak pengguna yang mengharapkan hadirnya fitur export untuk dapat mengekspor catatan ke dalam bentuk dokumen.

Perhatikan, sebelum menambahkan fitur export ke aplikasi Notes Apps, Anda perlu memperhatikan faktor infrastruktur yang mendasarinya, seperti kapasitas server dalam menangani permintaan pengguna. Jangan sampai karena hadirnya fitur ini, server kita menjadi kewalahan, bahkan down. Mengerikan, bukan?

Saat ini Notes Apps sudah dikembangkan menjadi V3. Di mana, fitur export menjadi salah satu fitur terbarunya. Namun sangat disayangkan, Notes Apps V3 belum bisa dirilis karena Notes API belum siap dengan hadirnya fitur tersebut.

Nah, di modul ini kita akan sama-sama membangun fitur ekspor dengan menggunakan solusi message broker agar dapat mengurangi beban dari server Notes API. Sehingga, di akhir modul ini Anda diharapkan dapat:

- Memahami konsep message broker.
- Mengetahui model-model dari message broker.
- Mengetahui beberapa kasus penggunaan untuk message broker dalam kehidupan nyata.
- Mengerti bagaimana cara memasang message broker server menggunakan RabbitMQ.
- Mengimplementasikan message broker ke proyek Back-End.
- Men-deploy message broker ke AWS dengan Amazon MQ.
