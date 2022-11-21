const FS = require('./firebase');
const { dt } = FS;


const db = [
    { "id" : 1, "email": "ejemplo@hotmail.com", "password" : "12345"},
    { "id" : 2, "email": "patito@gmail.com", "password" : "abcde" },
    { "id" : 3, "email": "correo@yahoo.mx", "password" : "correo" },
    { "id" : 4, "email": "ejecutivo@empresa.com", "password" : "ceo" },
    { "id" : 5, "email": "alumno@up.com.mx", "password" : "contraseña" }
]

const DC = dt.collection('dcollections');

DC.add(db);

module.exports = { db }