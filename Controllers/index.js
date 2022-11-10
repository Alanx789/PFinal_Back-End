let { db } = require('../Data')

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
            const message = (password == user.password) ? {status : 202, mensaje : "Ingresaste" } : { status : 406, mensaje : "Intente de nuevo"}
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
        const {body: {email, password}} = req
        
        //Buscar si existe un usuario similar
        const user = db.find( u => u.email == email )
        console.log(user)

        //Verificar si existe el usuario
        if (user == undefined){

            //Crear nuevo usuario
            console.log(db)

            //Falta función para generar ID aleatorio
            db = [...db, {
                id: 6,
                email, 
                password
            }]
            console.log(db)
            res.send( {status : 201} )

        } else{

            //Mostrar que ya existe el usuario 
            res.send({status : 406, mensaje: "Existe"})

        }

    } catch (error) {
        res.send({status: 500})        
    }
}

module.exports = {
    SignIn,
    LogIn
}