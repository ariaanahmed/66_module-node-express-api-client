import React, { useEffect, useState } from 'react';

const App = () => {

  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users').then((res) => res.json()).then((data) => setUser(data)).catch((error) => {
      console.log(error)
    })
  }, [])

  const handleAddUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)

    }).then((res) => res.json()).then((data) => {
      const newUser = [...users, data];
      setUser(newUser)
    })
  }

  return (
    <>
      <h2>user management system</h2>
      <h2>User: {users.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {
          users.map((user) => <p key={user.id}> {user.id} {user.name} {user.email} </p>)
        }
      </div>

    </>
  );
};

export default App;