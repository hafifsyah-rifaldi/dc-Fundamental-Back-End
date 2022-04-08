const { Client } = require('pg');
 
const client = new Client({
    user: 'developer',
    host: 'localhost',
    database: 'companydb',
    password: 'password01',
    port: 5432,
});

const getAllEmployees = async () => {
    // membuka koneksi database
    await client.connect();
    
    // melakukan query mendapatkan seluruh data karyawan
    const result = await client.query('SELECT * FROM karyawan');
   
    // menutup koneksi database
    await client.end();
   
    // mengembalikan seluruh karyawan dalam bentuk JavaScript array of object
    return result.rows;
  };

  const insertEmployee = async (id, name, email, address) => {
    // Membuat objek query
    const query = {
      text: 'INSERT INTO karyawan VALUES($1, $2, $3, $4) RETURNING *',
      values: [id, name, email, address],
    };
   
    const result = await pool.query(query);
    return result.rows;
  }