# Proyecto Final Desarrollo Web - ATM
### En la app se puede iniciar sesión, mostrar la info del usuario, salir de sesión, hacer retiros y pagos

## Es importante que la carpeta del Back-End y Front-End estén en carpetas separadas

Pasos para la instalación del programa localmente:
```
1. Descargar el proyecto de GitHub a la máquina
   a. Picar en Code y descargar el link
   b. Dentro de la carpeta en donde se quiera poner, abrir GitBash y poner el comando:
      git clone <link copiado>
      
2. Correr el proyecto en tu Visual Studio Code
   a. Abrir tu terminal de Visual Studio Code (Asegurate de estar dentro de la carpeta en donde está el proyecto)
   b. Escribir en consola las dependencias a usar escribiendo en la consola
      npm i - para instalar node modules
      npm install express firebase cors body-parser nodemon
   c. Para comenzar a correr la app hay que escribir en consola
      npm start
   
```

## Es importante que los proyecto Back-End y Front-End estén corriendo simultáneamente para que pueda funcionar correctamente

* Estructura de BD

```
const user = {
      id,
      money,
      status               
}

const transactions = {
      id,
      description,
      money,
      status                
}

const user_transactions = {
      user_id,
      transaction_id,
      quantity                
}
```


* Routes

1. localhost:3030/api/sign-in
2. localhost:3030/api/log-in           
3. localhost:3030/api/operations   no salio :(
