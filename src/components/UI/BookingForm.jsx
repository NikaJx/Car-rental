import React from 'react';
import { Form, FormGroup } from 'reactstrap';

import '../../styles/BookingForm.css';

const BookingForm = () => {

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='Firts Name'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='Last Name'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="email" placeholder='Email'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="number" placeholder='Phone Number'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="email" placeholder='From Address'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="number" placeholder='To Address'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <select>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <select>
                    <option value="1 luggage">1 Luggage</option>
                    <option value="2 luggage">2 Luggage</option>
                    <option value="3 luggage">3 Luggage</option>
                    <option value="4 luggage">4 Luggage</option>
                    <option value="5+ luggage">5+ Luggage</option>
                </select>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="data" placeholder='Journey Data'/>
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type="time" placeholder='Journey Time' className='time__picker'/>
            </FormGroup>
            <FormGroup>
                <textarea rows={5} type="textarea"
                    className='textarea'
                    placeholder='Wrote'>

                    </textarea>
            </FormGroup>
        </Form>
    );
}

export default BookingForm;