# Pendahuluan Database dengan Amazon RDS

Ceritanya, aplikasi Notes App Anda semakin popular. Kini Notes App sudah banyak menampung catatan yang dimasukan oleh pengguna. Karena terdapat proses validasi, data yang dikirimkan pun menjadi lebih berkualitas.

Namun masalah baru muncul, di mana ketika Notes API sudah menampung banyak sekali data, penggunaan memori dari EC2 instance semakin membengkak. Bahayanya adalah server menjadi lemot dan sering kali crash.

Wajar, karena saat ini kita menyimpan data hanya di dalam memori menggunakan array. Penyimpanan data pada memori aplikasi bukanlah best practice tentunya. Selain membuat memori server atau instance menjadi bengkak, data yang disimpan pun tidak persisten. Ketika server mengalami restart karena update atau crash, data yang disimpan pun akan hilang. Jika Anda tidak ingin data pengguna aplikasi Anda hilang, maka Anda membutuhkan penyimpanan baru yang lebih baik.

Saatnya Anda berkenalan dengan teknologi database, tempat penyimpanan yang lebih tangguh dibandingkan memori. Di modul kali ini Anda akan belajar banyak mengenai database. Hingga di akhir modul ini diharapkan Anda dapat:

- Mengetahui fungsi Database
- Mengenal PostgreSQL sebagai relational database
- Memasang PostgreSQL di komputer Anda
- Membuat user dan database di PostgreSQL
- Mengenal dan mampu melakukan SQL Queries dasar
- Menggunakan Postgres Database pada Notes API
- Men-deploy Postgres Database pada Amazon RDS
