// Login.js
import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login({ onLogin }) {
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwtDecode(credentialResponse['credential']);
          fetch('http://127.0.0.1:8000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Specify content type
            },
            body: JSON.stringify(decoded), // Serialize the data
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Login failed'); // Throw an error for non-OK responses
            }
            return response.json(); // Parse response JSON
          })
          .then(data => {
            alert('Login successful');
            onLogin(); // Call onLogin function passed from parent component
          })
          .catch(error => {
            alert('Error occurred: ' + error.message);
            console.error(error);
          });
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
export default Login;