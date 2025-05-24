1. npm init -y
2. npm i pg
3. npm i express
3. npm i ejs

Langkah no 2 dan 3 atau bila ingin install package lain sekaligus
npm i pg express ejs

4. buat .gitignore
    ketikkan node_modules didalamnya lalu save

5. Buat koneksi dengan db
    - buat file config.js/ connection.js => https://node-postgres.com/features/connecting
    pilih features -> connecting -> programmatic
6. Buat tabel
    - buat file migration.js /setup.js => 
7. Seeding tabel
    - buat file seed, insert data dari json, pake fs promises

-- EXPRESS --
8. Buat file app.js / index.js
    setup express => https://expressjs.com/en/starter/hello-world.html
9. Set view engine di app.js
    https://expressjs.com/en/guide/using-template-engines.html

-- EJS
10. File di folder views berekstensi .ejs
    https://ejs.co/

-- TAMBAHAN
nodemon :https://nodemon.io/
akses server kalian menggunakan nodemon atau `node --watch app.js`