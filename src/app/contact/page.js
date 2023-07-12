'use client';
import React, { useState } from 'react';
import contactstyles from '@/app/styles/contacts.css';

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: value,
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    name:user.name,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        }catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="contact">
            <div className="contact-page">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Enter Your Name:</label>
                        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={user.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="phone">Contact no:</label>
                        <input type="number" id="phone" name="phone" value={user.phone} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea rows={5} id="message" name="message" value={user.message} onChange={handleChange} />
                    </div>

                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
