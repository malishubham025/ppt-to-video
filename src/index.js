import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/loginPage';
import Panel from './components/panel';
import Player from './components/Player';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 // Function to handle successful login
 const handleLogin = () => {
    setIsLoggedIn(true);
 };

 return (
    <div>
      {!isLoggedIn && <Auth onLogin={handleLogin} />}
      {isLoggedIn && <Panel />}
    </div>
 );
}

function A() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
 );
}

ReactDOM.render(<A />, document.querySelector('.root'));
