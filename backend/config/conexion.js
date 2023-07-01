const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysqlunlm',
  database: 'proyecto_cursos',
  port: 3306,
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from('Mysqlunlm') // Coloca tu contraseña aquí
  }
});

 connection.connect(function(error){
    if(error){
       console.log('ha ocurrido un error ' + error)
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

 module.exports= connection;

