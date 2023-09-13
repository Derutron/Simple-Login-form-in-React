import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = ({ name, email, password }) => {
    if (name === 'user' && email === 'user@example.com' && password === 'password') {
      setLoggedInUser(name);
    } else {
      setLoggedInUser(null);
    }
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <div>
          <p>Welcome, {loggedInUser}!</p>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;




