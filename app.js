const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const mysql = require('mysql');

app.use(helmet());
app.use(cors());

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));


app.listen(3001, () => {
    console.log(`Express on port 3001`);
});


//  Reto final es generar la conxion entre mi back y mi base de datos

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Matrix27',
    database: 'ecommerce_api',
    port: '3307'
});


//probamos conexión
conexion.connect(function(error) {

    if (error) {
        throw error;
    } else {
        console.log('conexion exitosa');
    }
})



// Repositorio de proyecto personal con la esctructura ya vista de el modulo back con node