let { db } = require('../Data')
const FS = require('../firebase');
const { bd } = FS;

const LogIn = async(req, res) => {
    try {

        //Obtener usuario y contraseña
        const {body: {email, password}} = req

        //Ver si existe el usuario en la BD
        const user = db.find( u => u.email == email )

        if (user == undefined){

            //Si no existe marcar error 404
            res.send( { status: 404} )

        } else{

            //Verificar si mando la constraseña correcta
            const message = (password == user.password) ? {status : 202, user } : { status : 406}
            res.send(message)
        }
    } catch (error) {

        //Por si no responde el servidor
        res.send( { status: 500 } )        

    }
}

const SignIn = async(req, res) => {
    try {

        //Obtener email y contraseña
        const {body: dc } = req

        const DC = bd.collection('dcollections');
        
        const { _path: { segments } } = await DC.add({
            userID: dc.userID, 
            email: dc.email, 
            password: dc.password, 
            name: dc.name, 
            phone: dc.phone
        });

        const userID = segments[1];

        //Buscar si existe un usuario similar
        const user = db.find( u => u.email == email )
        console.log(user)

        //Verificar si existe el usuario
        if (user === undefined){

            //Crear nuevo usuario
            const newUser = {
                id: userID,
                email, 
                password,
                name,
                phone
            }

            db = [...db, newUser]
            res.send( {status : 201, newUser} )

        } else{

            //Mostrar que ya existe el usuario 
            res.send({status : 406})

        }

    } catch (error) {
        res.send({status: 500})        
    }
}

module.exports = {
    SignIn,
    LogIn
}