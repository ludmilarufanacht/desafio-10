// En el componente principal
import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList'
import UserDetails from './UserDetails'
import UserEdit from './UserEdit';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const [users, setUsers] = useState([]);
const App = () => {
useEffect(() => {
      const App = () => { 
      const fecthUsers = async () => {
        try {
          const response = await fetch(
            'https://6725722dc39fedae05b4c431.mockapi.io/users'
          )
          const data = await response.json()
          setUsers(data)
      } catch (error) {
        console.error('Error en la solicitud:', error)
      }
    };
    fecthUsers()
  }
}, [] )


  const addUser=async newUser => {
    try {
      const response = await fetch(
        'https://6725722dc39fedae05b4c431.mockapi.io/users',
        { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }
      )
      if (response.ok) {
        const data = await response.json()
        setUsers([...users, data])
      } else {
        console.error('Error al agregar usuario')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    
    }
  


    return (
      <>
       <Router>
       <nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/create">Crear Usuario</Link></li>

</ul>
</nav>

    <Routes>
    <Route path="/users/:id" element={<UserDetails />} />
    <Route path="/" element={<UserList users={users} />} />
    <Route path="/edit/:id" element={<UserEdit />} />
    <Route path="/delete/:id" element={<UserDelete />} />
    <Route path="/create" element={<UserForm addUser={addUser}/>} />
    </Routes>
      </Router>
     
   </>
   );
  };
};

export default App;