// Auth.js
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './login';

function Auth({ onLogin }) {
  return (
    <div className='login'>
    <h1>VisualAi</h1>
    <p>Please Signin</p>
    <GoogleOAuthProvider clientId="1000686991090-6m4jr1vgon0bte0m6delcnfi6kpu8c8f.apps.googleusercontent.com">
      <Login onLogin={onLogin} />
    </GoogleOAuthProvider>
    </div>
  );
}

export default Auth;

