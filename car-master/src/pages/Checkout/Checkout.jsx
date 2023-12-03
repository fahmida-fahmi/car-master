import { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../share/Context';


const Checkout = () => {
    const dataLoader = useLoaderData()
    const { user } = useContext(AuthProvider)
    const { _id, title, price, img } = dataLoader
    const handleCheckout = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const title = form.title.value
        const price = form.price.value
        const email = form.email.value
        const date = form.date.value
        // const textarea = form.message.value 
        const order = {
            name,
            img,
            price,
            title,
            email,
            date,
            serviceId: _id
        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))


        

    }
    const handleOrder = () => {
        alert('Order confirmed')
    }
    return (
        <div className='w-full mt-5'>
            <form onSubmit={handleCheckout}>
                <div className='w-full grid grid-cols-2 gap-10'>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder='First Name' className='bg-white py-3 px-4 border rounded-lg' />
                    <input type="email" name='email' defaultValue={user?.email} placeholder='Your Email' className='bg-white py-3 px-4 border rounded-lg' />
                </div>
                <div className='mt-3 grid grid-cols-3 gap-10'>
                    <input type="text" name='price' defaultValue={'$' + price} className='bg-white py-3 px-4 border rounded-lg' />
                    <input type="text" name='title' defaultValue={title} className='bg-white py-3 px-4 border rounded-lg' />
                    <input type="date" name='date' className='bg-white py-3 px-4 border rounded-lg' />
                </div>
                <button onClick={handleOrder}  className='w-full bg-slate-700 text-white my-4 p-3 rounded-2xl text-3xl'>Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;