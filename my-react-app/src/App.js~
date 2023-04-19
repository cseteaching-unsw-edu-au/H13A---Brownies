import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Delivery from './pages/delivery';
import Mailbox from './pages/mailbox';
import Login from './pages/loginpage';
import Registration from './pages/registrationpage';
import Notifications from './pages/notifications';
import SignOut from './pages/signout';

function App() {
return (
    <>
    <div style={{ display: "flex", alignItems: "center;" }}>
    <img
    src="https://media.istockphoto.com/id/1219193706/vector/vector-of-envelope-icon-in-trendy-flat-design.jpg?s=612x612&w=0&k=20&c=5DtsGAID5dFKMb2DFbtjVDke6aq7T32lPP3BUtxalJs="
    alt=""
    width="100" 
    height="100" 
    />
    <h2 style={{ marginTop: "1.5%", marginLeft: "1%", display: "inline-blocks;" }}>INVOICE POSTIE</h2>
    </div>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/mailbox' element={<Mailbox />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/signout' element={<SignOut />} />
    </Routes>
    </Router>
    </>
);
}

export default App;

