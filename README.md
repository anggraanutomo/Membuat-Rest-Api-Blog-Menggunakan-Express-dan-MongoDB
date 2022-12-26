Program ini berjalan di Server menggunakan node.js pastikan node.js sudah terinstall
baik di local machine atau server, untuk menjalankan program ini dapat
mengetikkan perintah berikut pada terminal:

```node src\index.js```

Agar proyek di local machine dapat diakses melalui internet, pastikan sudah
menginstall ngrok,
untuk menginstall ngrok dapat mengetikan

```npm install -g ngrok```

, kemudian jalankan perintah berikut pada terminal:

```ngrok http 3000```

Dalam melakukkan development, bisa menggunakan nodemon untuk
mengupdate perubahan pada file secara otomatis, untuk menginstall nodemon
dapat mengetikan perintah berikut pada terminal:

```npm install -g nodemon```

Program ini juga memerlukan server MongoDB, untuk menginstall MongoDB dapat
mengikuti langkah-langkah yang ada di link berikut: [Menginstall MongoDB](https://anggra.id/posts/Membuat-Docker-Compose-MongoDB-dan-MongoExpress/)
