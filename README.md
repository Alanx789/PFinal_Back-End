# Proyecto Final Desarrollo Web - ATM
### En la app se puede iniciar sesión, mostrar la info del usuario, salir de sesión, hacer retiros y pagos

* Estructura de BD

```
const user = {
      client_id,
      email,
      password,
      name,
      card: {
          nip,              -este sería "el id" de la tarjeta
          number,
          cvv,
          type,             -débito o crédito
          money             -el saldo disponible
      },
      phone,
      status                -el valor es bool (0=al dia con sus pagos, 1=atrasado de pagos)
}
```


* Routes

1. localhost:3030/api/sign-in
2. localhost:3030/api/create-account   -le pedirá al usuario sus datos (name, lastname, phone) y el tipo de tarjeta que quiere tener (debit,credit)
3. localhost:3030/api/main-page        -estaran todos los menus disponibles en la app: consulta, pagos, retiros
4. localhost:3030/api/show-info
5. localhost:3030/api/payments         -solo puede hacer pagos a ciertos servicios: departamentales, tesorería
6. localhost:3030/api/withdrawals
