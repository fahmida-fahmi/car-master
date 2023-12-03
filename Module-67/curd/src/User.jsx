import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loader = useLoaderData()
    const [user, setUser] = useState(loader)
    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = loader.filter(deleteUser => deleteUser._id !== id)
                    setUser(remaining)
                }
            })
    }

    return (
        <div>
            <h1>{user.length} </h1>
            <div style={{ display: 'flex' }}>

                {
                    user.map(user => <div key={user._id} style={{ border: '1px solid white', margin: '20px', width: '350px' }}>
                        <h5>Name : {user.name}</h5>
                        <h5>Name : {user.email}</h5>
                        <h5>Name : {user.name}</h5>
                        <button onClick={() => handleDeleteUser(user._id)} style={{ background: 'purple', margin: '10px' }} >Remove</button>
                        <Link to={`/update/${user._id}`}>
                            <button style={{ background: 'red', margin: '10px' }} >Update</button>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default User;