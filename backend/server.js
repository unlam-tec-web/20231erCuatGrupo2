const express = require('express');
//const cors = require('cors');

const port = process.env.PORT || 4500; // Cambia el puerto a 4500

const app = express();

app.use(express.json());

//config
app.set('port',port)

app.use('/apiRegistro',require('./userRoutes'));

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});



