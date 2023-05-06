import React, { useEffect, useState } from 'react';

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users').then((res) => res.json()).then((data) => setUsers(data)).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <h2>user management system</h2>
      <h5>{users.length}</h5>
    </>
  );
};

export default App;