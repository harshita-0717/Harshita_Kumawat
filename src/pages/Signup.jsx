import React, { useState } from 'react';
function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handleChange = (e) => {
        setFormData(
            setFormData({ ...formData, [e.target.name]: e.target.value })
        );
    };

const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/api/users/signup', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result.message);
 };


    return (
    <div>
        <h2>Signup</h2>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button onClick={handleSignup}>Signup</button>
    </div>
    );
}
export default Signup;