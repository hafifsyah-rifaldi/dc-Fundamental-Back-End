# Pendahuluan Caching Menggunakan Amazon ElastiCache

Tak terasa ya sudah sejauh ini perjalanan kita dalam mendalami ilmu back-end. Semoga Anda tetap semangat ya, karena kami pun begitu. Sebelum kita menyelam lebih dalam, mari kita kilas balik bagaimana kondisi dari aplikasi Notes App saat ini.

Jika Anda perhatikan, sekarang aplikasi Notes App sudah cukup tangguh. Kita telah menambahkan beberapa lapisan, seperti validation data, database, authentication dan authorization, message broker, hingga storage.

Mungkin Anda akan bergumam, “Hmm, sepertinya ini sudah cukup bagus untuk sebuah aplikasi.” Eits, berhenti di sana. Sebelum Anda menganggap demikian, mari kita bahas potensi kelemahan dari arsitektur aplikasi Notes App saat ini.

Sekarang, aplikasi kita sudah melejit dan mendunia. Tak ada yang tak mengenal aplikasi Notes App. Selaras dengan hal itu, kini server pun melayani banyak sekali request. Tentu Anda sadar, pekerjaan server semakin berat, terutama server RDS yang selalu siap untuk mengolah data bila ada request yang masuk.

Karena banyaknya request, server database kita kewalahan! Tak jarang server database RDS kita mengalami down sehingga aplikasi Notes App tidak bisa digunakan. Lantas, apa solusi dari permasalahan ini? Mengaktifkan fitur autoscaling? Ah tidak! Mengaktifkan autoscaling saat ini akan menimbulkan biaya.

Kita memerlukan solusi yang tepat untuk masalah ini, tahukah Anda apa itu? Jawabannya adalah cache. Bila request dari pengguna hanya sekadar membaca data, maka cache adalah solusi yang tepat untuk dapat meminimalkan beban kerja database dan meningkatkan kecepatan respons.

Nah, pada modul kali ini kita akan belajar bagaimana mengimplementasikan solusi caching pada aplikasi Notes App. Sehingga, di akhir modul ini Anda diharapkan dapat:

- Memahami konsep cache.
- Mengetahui apa itu Redis.
- Mengetahui cara memasang Redis secara lokal.
- Mengerti beberapa sintaks dasar pada Redis.
- Menggunakan Redis untuk caching pada RESTful API.
- Men-deploy Redis pada Amazon ElastiCache.
