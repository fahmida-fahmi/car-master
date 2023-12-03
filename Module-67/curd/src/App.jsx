import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleForm = (event) =>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const name = form.name.value 
    const user ={
      email, name
    }
    console.log(email,name);
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('user created successfully')
        form.reset()
      }
    })
  }

  return (
    <>
     <h1>Simple crud</h1>
     <form onSubmit={handleForm}>
      <input type="email" name='email' />
      <br />
      <input type="text" name='name'/>
      <br />
      <input type="submit" name='' />
     </form>
    </>
  )
}

export default App
