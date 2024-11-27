import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {
// Validar datos antes de agregar
const newUser = { name, email };
// Llamar a la función desde las props para agregar usuario
addUser(newUser);
setName('')
setEmail('')
};

return (
<form>
  <legend>Agregar Usuario</legend>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Nombre usuario" aria-label="Nombre" aria-describedby="button-addon"></input>
    <input type="text" class="form-control" placeholder=" Email Usuario" aria-label="Email" aria-describedby="button-addon"></input>
    <button class="btn btn-primary" type="button" id="button-addon2" onClick={handleSubmit}>Agregar</button> 
  </div>
</form>
  );
};

export default UserForm;