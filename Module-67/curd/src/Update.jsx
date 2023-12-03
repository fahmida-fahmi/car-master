import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userUpdate = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const user = { name, email }
        console.log(name, email);

        fetch(`http://localhost:5000/users/${userUpdate._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                }
            })
    }
    return (
        <div>
            <h1>The Update profile of {userUpdate.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={userUpdate?.name} />
                <br />
                <input type="email" name='email' defaultValue={userUpdate?.email} />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;