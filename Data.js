const FS = require('./firebase');
const { dt } = FS;


const db = [
    { "id" : 1, "email": "ejemplo@hotmail.com", "password" : "12345", 'name':"John"},
    { "id" : 2, "email": "patito@gmail.com", "password" : "abcde", 'name':"Abby" },
    { "id" : 3, "email": "correo@yahoo.mx", "password" : "correo", 'name':"Constance" },
    { "id" : 4, "email": "ejecutivo@empresa.com", "password" : "ceo", 'name':"Mike" },
    { "id" : 5, "email": "alumno@up.com.mx", "password" : "contraseña", 'name':"Stephen" }
]

const DC = dt.collection('dcollections');

DC.add(db);

module.exports = { db }