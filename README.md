# PFinal_Back-End
### En la app se puede iniciar sesión, mostrar la info del usuario, salir de sesión, hacer retiros y pagos

* Estructura de BD

[^]: const user = {
[^] > client_id,
[^] > name,
[^] > lastname,
[^] > card: {
[^] > > nip,       > > >    -este sería "el id" de la tarjeta
[^] > > > number,
[^] > > > cvv,
[^] > > > type,    > > >    -débito o crédito
[^] > > > money    > > >    -el saldo disponible
[^] > },
[^] > phone,
[^] > status      > > >     -el valor es bool (0=al dia con sus pagos, 1=atrasado de pagos)
}



* Routes

[^] localhost:3030/api/sign-in
[^] localhost:3030/api/log-out

[^] localhost:3030/api/create-account  -le pedirá al usuario sus datos (name, lastname, phone) y el tipo de tarjeta que quiere tener (debit,credit)

[^] localhost:3030/api/show-info

[^] localhost:3030/api/payments    -solo puede hacer pagos a ciertos servicios (departamentales, casa-agua,luz,internet)

[^] localhost:3030/api/withdrawals
