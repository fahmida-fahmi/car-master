import React from 'react';
import { Form } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const chocolate = useLoaderData()
    // const {_id,name,country, category} = chocolate
    console.log(chocolate);

    const handleAddChocolate= event =>{
        event.preventDefault()

        const form = event.target 

        const name = form.name.value 
        const country = form.country.value 
        const category = form.category.value 

        const updatedChocolate ={
            name, country, category
        }
        console.log(updatedChocolate);
        fetch(`http://localhost:4000/chocolate/${chocolate._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'A chocolate has successfully been Updated',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset()
        })

    }
    return (
        <div className='w-4/5 mx-auto my-10 family'>
            <Link to='/' className='flex no-underline text-black text-xl items-center border-bottom border-b-2 py-3'>
                <BsArrowLeft></BsArrowLeft>
                <p className='px-2'>All Chocolates</p>
            </Link>
            <div className='bg-[#f3f3f3] py-16 rounded-2xl'>
                <div className='text-center'>
                    <h1>Update Chocolates</h1>
                    <p>Use the below form to update the product</p>
                </div>
                <Form className='w-3/4 mx-auto' onSubmit={handleAddChocolate}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='p-3' name='name' defaultValue={chocolate?.name} type="text" placeholder="Hot Pink Chocolate" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country</Form.Label>
                        <Form.Control className='p-3' name='country' defaultValue={chocolate?.country} type="text" placeholder="Enter Country Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select className='p-3' name='category' aria-label="Default select example" defaultValue={chocolate?.category}>
                            <option disabled selected>Open this select menu</option>
                            <option value="Basic" >Basic</option>
                            <option value="premium">Premium</option>
                            <option value="Pro">Pro</option>
                        </Form.Select>
                    </Form.Group>
                    <button className=' text-white no-underline py-3  rounded-md my-4 text-center text-xl bg-[#91572b] w-full'>Update</button>
                    

                </Form>

            </div>


        </div>
    );
};

export default UpdateChocolate;