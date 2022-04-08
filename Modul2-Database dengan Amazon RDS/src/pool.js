const { Pool } = require('pg');
 
const pool = new Pool({
    user: 'developer',
    host: 'localhost',
    database: 'companydb',
    password: 'password01',
    port: 5432,
});

const getAllEmployees = async () => {
    // melakukan query mendapatkan seluruh data karyawan
    const result = await pool.query('SELECT * FROM karyawan');
   
    // mengembalikan seluruh karyawan dalam bentuk JavaScript array of object
    return result.rows;
  }