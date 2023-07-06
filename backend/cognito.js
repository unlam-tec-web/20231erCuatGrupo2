const AWS = require('aws-sdk');
const jwt_decode = require('jwt-decode');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
let cognitoAttributeList = [];
//const config = require("./environments/environment");
const config = require("./credenciales.json");

const poolData = {
  UserPoolId: config.UserPoolId,
  ClientId: config.ClientId
};

const attributes = (key, value) => {
  return {
    Name: key,
    Value: value
  }
};

const password_validate = new_password_validate = {
  password: {
    isStrongPassword: {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1 // Agrega esta propiedad para requerir al menos un carácter especial
    },
    errorMessage: "La contraseña debe contener al menos una letra minúscula, una mayúscula, un número, un carácter especial y más de 8 caracteres",
  }
}


const mail_validate = {
  mail: {
    isEmail: {
      errorMessage: 'El email no es valido',
    },
    normalizeEmail: true
  }
}

const code_validate = {
  code: {
    isLength: {
      min: 6,
      max: 6
    },
    errorMessage: "Codigo incorrecto"
  }
}

function setCognitoAttributeList(email) {
  let attributeList = [];
  attributeList.push(attributes('email', email));
 // attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "given_name", Value: given_name }));
  return attributeList;
}

function getCognitoAttributeList() {
  return cognitoAttributeList;
}

function getCognitoUser(email) {
  const userData = {
    Username: email,
    Pool: getUserPool()
  };
  return new AmazonCognitoIdentity.CognitoUser(userData);
}

function getUserPool() {
  return new AmazonCognitoIdentity.CognitoUserPool(poolData);
}

function getAuthDetails(email, password) {
  var authenticationData = {
    Username: email,
    Password: password,
  };
  return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
}

function initAWS(region = process.env.AWS_COGNITO_REGION) {
  AWS.config.region = region; // Región de AWS
}
function decodeJWTToken(token) {
  const { email, exp, auth_time, token_use, sub } = jwt_decode(token);
  return { token, email, exp, uid: sub, auth_time, token_use };
}

module.exports = {
  initAWS,
  getCognitoAttributeList,
  getUserPool,
  getCognitoUser,
  setCognitoAttributeList,
  getAuthDetails,
  decodeJWTToken,
  mail_validate,
  password_validate,
}


