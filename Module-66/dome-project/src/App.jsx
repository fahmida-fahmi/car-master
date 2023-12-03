import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  const handleForm = (event) =>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const user = {name, email}
    console.log(name,email);
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user) 
    })
    .then(res =>res.json())
    .then(data => {
      const newUser = [...user,data]
      setUser(newUser)
      form.reset()
    })
  }

  return (

    <>
      <h1>Total user {user.length}</h1>
      <form onSubmit={handleForm}>

        <input type="email" name='email'/>
        <br />
        <input type="text" name='name'/>
        <br />
        <button>Submit</button>
      </form>
       {
        user.map(name => <p>{name.name} : {name.email} : {name.id}</p>)
       }
    </>
  )
}

export default App

