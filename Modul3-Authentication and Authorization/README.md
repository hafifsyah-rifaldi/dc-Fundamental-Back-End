# Pendahuluan Authentication dan Authorization

Notes API telah menerapkan database dan imbasnya semakin banyak pengguna yang suka dengan Notes Apps--si aplikasi catatan--yang kita kembangkan. Namun pengguna tidak pernah merasa puas, mereka selalu ingin aplikasi catatan terus melakukan inovasi, permintaan terbesar yang diharapkan adalah fitur autentikasi dan otorisasi.

Pengguna ingin catatan mereka kini bersifat “private”, hanya yang membuat catatanlah yang dapat melihat catatan tersebut. Selain itu, mereka juga ingin terdapat fitur kolaborasi, di mana antara pengguna dapat membagikan catatan dan berkolaborasi dalam mengelola catatan. Wah! Luar biasa ya permintaan dari pengguna nih.

Oke, jangan anggap ini sebagai masalah baru. Ini adalah kesempatan untuk terus mengembangkan Notes API agar terus lebih baik. Untuk aplikasi front-end alias Notes Apps, kini sudah dikembangkan ke versi 2 dan telah memenuhi kebutuhan yang diinginkan pengguna. Anda bisa mengaksesnya pada tautan Notes App versi 2. Namun, aplikasi tersebut belum berjalan dengan baik karena back-end kita belum siap untuk mendukung fungsionalitasnya.

Sebagai gambaran awal, setelah kita menyelesaikan modul ini, fitur autentikasi dan otorisasi pada Notes Apps V2 akan berfungsi seperti ini:

- [Notes Apps Authentication Feature](https://youtu.be/htdYG3C8G2w)<br />
  Tugas kita di modul ini adalah mengembangkan Notes API hingga fitur autentikasi dan otorisasi di Notes Apps versi 2 dapat digunakan dengan baik. Di modul ini, kita akan belajar banyak mengenai Authentication dan Authorization. Di mana di akhir modul diharapkan Anda dapat:

* Membuat entitas pengguna (user).
* Mengetahui Authentication.
* Mengenal macam-macam skema authentication untuk RESTful API.
* Mengetahui skema Token-Based Authentication.
* Mengetahui format JWT sebagai format token yang digunakan pada Token-Based Authentication.
* Mengimplementasikan Authentication pada Notes API.
* Mengetahui Authorization.
* Mengimplementasikan Authorization pada Notes API.
* Men-deploy perubahan Authentication dan Authorization pada server production (EC2 Instance).
