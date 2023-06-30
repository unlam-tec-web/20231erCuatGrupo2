const router = require('express').Router()
const conexion = require('./config/conexion');

//asignamos todas las rutas
//rutas.get('/', function (req, res){
//  res.send('hola desde rutas/inicio')
//})
//GET CURSOS
router.get('/',(req, res)=>{
  let sql='select * from cursos'
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })

})
//GET UN CURSO
router.get('/:id',(req, res)=>{
  const {id} = req.params
  let sql='select * from cursos where identificador = ?'
  conexion.query(sql,[id],(err,rows,fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })

})

//Agregar curso
router.post('/',(req,res)=>{
  const{Categoria, Descripcion, Imagen, Nombre, Precio} = req.body

  let sql =`insert into cursos(Categoria,Descripcion,Imagen,Nombre,Precio) values('${Categoria}','${Descripcion}','${Imagen}','${Nombre}','${Precio}')`
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status:'curso agregado'})
    }
  })
})

//Agregar curso al carrito
router.post('/',(req,res)=>{
  const{Identificador} = req.body

  let sql =`insert into carrito(Identificador) values('${Identificador}')`
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status:'curso agregado al carrito'})
    }
  })
})

//MOSTRAR LO QUE COTIENE EL CARRITO (GET CARRITO)
router.get('/',(req, res)=>{
  let sql='select * from carrito'
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })

})

//Eliminar curso
router.delete('/:id',(req,res)=>{
  const{id}=req.params

  let sql=`delete from cursos where Identificador = '${id}'`
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status:'curso eliminado'})
    }
  })
})
//Modificar curso
router.put('/:id',(req,res)=>{
  const{id}=req.params
  const{Categoria, Descripcion, Imagen, Nombre, Precio} = req.body

  let sql=`update cursos set Categoria='${Categoria}',Descripcion='${Descripcion}',Imagen='${Imagen}',Nombre='${Nombre}',Precio='${Precio}' where Identificador = '${id}'`

  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status:'curso modificado'})
    }
  })

})

//GET CATEGORIAS
router.get('/',(req, res)=>{
  let sql='select categoria from cursos'
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err;
    else{
      res.json(rows)
    }
  })

})





module.exports= router;
