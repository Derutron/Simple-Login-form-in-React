import React, { useState } from 'react';

function LoginForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        setError('Incorrect name, email, or password. Please try again.');
        return;
        }

        setError('');
        setUsername(name); 
        setIsLoggedIn(true); 
    };

    const handleLogout = () => {
        
        setName('');
        setEmail('');
        setPassword('');
        setUsername('');
        setIsLoggedIn(false);
        setError('');
    };

    return (
        <div>
        {isLoggedIn ? (
            <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className='auth-form-container'>
            <h2>Login</h2>

            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='name'> Name </label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='name'
                id='name'
                name='name'
                />
                <label htmlFor='email'> Email </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='email@mail.com'
                id='email'
                name='email'
                />
                <label htmlFor='password'> Password </label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='********'
                id='password'
                name='password'
                />
                <button type='Submit'>Log In</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        )}
        </div>
    );
    }

    export default LoginForm;


