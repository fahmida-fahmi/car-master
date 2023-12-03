import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../share/Context';
import Booking from './Booking';
import { button } from '@material-tailwind/react';

const Bookings = () => {
    const { user } = useContext(AuthProvider)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = id => {
        confirm('do you really want to delete it item?')
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('your item has been deleted successfully')
                }
                const remaining = bookings.filter(service => service._id !== id)
                setBookings(remaining)
            })
    }
    const deleteAllCart = () => {
        confirm('are you sure u want to delete all selected products?')
        fetch('http://localhost:5000/bookings', {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('your items have been deleted successfully')
                }
                setBookings([])
            })
    }
    return (
        <div >
            {bookings.map(order => <Booking
                key={order._id}
                order={order}
                handleDelete={handleDelete}
            ></Booking>)}
            {
                bookings.length > 0 &&
                    <button onClick={deleteAllCart} className='btn btn-outline-danger my-5'>Delete the whole cart</button> 
            }
        </div>
    );
};

export default Bookings;