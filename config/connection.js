const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'ehtixham_childoasis',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

const pool = mysql.createPool({
     //host: 'az1-ss110.a2hosting.com',
     host: '106.0.62.87',
     //host: 'localhost',
     user: 'ehtixham_sham',
     password: 'Ehtisham@74711351',
     database: 'ehtixham_childoasis',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// You can use pool.promise() to enable promises for queries
module.exports = pool.promise();