const router = require('express').Router()
const { query, param, body, checkSchema, validationResult } = require('express-validator');
const config = require("./credenciales.json");
//const config = require("./environments/environment")
const awsConfig = require('./cognito.js');
const { default: jwtDecode } = require('jwt-decode');

// Ruta GET para la página de inicio de sesión del usuario
/*router.get('/', (req, res) => {
  res.send("hola mundo");
});*/

/*router.post('/login', (req, res) => {
  res.send("holaaa");
});*/

router.post("/registrar",
  checkSchema(awsConfig.mail_validate),
  //checkSchema(awsConfig.given_name_validate),
  checkSchema(awsConfig.password_validate),
  (req, res) => {
    console.log('llego');
    console.log(JSON.stringify(req.body))
    const errors = validationResult(req);

    //Validacion de datos
    if (!errors.isEmpty()) {
      console.log("entro por errors")
      console.log(errors)
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    var username = req.body.mail;
    var password = req.body.password;
   // var given_name = req.body.name;

    var attributeList = awsConfig.setCognitoAttributeList(username);

    console.log("paso validaciones")
    awsConfig.getUserPool().signUp(username, password, attributeList, null, (error, result) => {

      if (error) {
        console.log('error')

        res.status(400).json(error);
      }
      else {
        console.log('exito')
        res.status(200).json(result);
      }
    });
  });

router.post("/verificar",
  checkSchema(awsConfig.mail_validate),
 // checkSchema(awsConfig.code_validate),
  (req, res) => {
    console.log("llego verificar")
    console.log(JSON.stringify(req.body))
    const errors = validationResult(req);

    //Validacion de datos
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    var username = req.body.mail;
    var code = req.body.code;

    awsConfig.getCognitoUser(username).confirmRegistration(code, true, (error, result) => {
      if (error) {
        res.status(400).json(error);
      }
      else {
        res.status(200).json(result);
      }
    });

  });

router.post("/iniciar-sesion",
  checkSchema(awsConfig.mail_validate),
  checkSchema(awsConfig.password_validate),
  (req, res) => {

    const errors = validationResult(req);

    //Validacion de datos
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    var username = req.body.mail;
    var password = req.body.password;

    var authenticationDetails = awsConfig.getAuthDetails(username, password);

    awsConfig.getCognitoUser(username).authenticateUser(authenticationDetails, {
      onSuccess: function (result) {

        res.status(200).json(
          {
            result
          }
        );
      },
      onFailure: function (error) {
        switch (error.code) {
          case "NotAuthorizedException":
            res.status(401).json(error = "Usuario no existe o contraseña incorrecta");
            break;
          case "UserNotConfirmedException":
            res.status(401).json(error = "Usuario no confirmado");
            break;
          default:
            res.status(400).json(error);
        }
      },
    });
  });

router.post("/cerrar-sesion",
  (req, res) => {

    const errors = validationResult(req);

    //Validacion de datos
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    var username = awsConfig.decodeJWTToken(req.body.jwt).email;

    awsConfig.getCognitoUser(username).signOut((response) => {
      res.status(200).json(response);
    });
  });


module.exports = router;
