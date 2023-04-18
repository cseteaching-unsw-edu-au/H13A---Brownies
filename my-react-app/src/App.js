/*import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        // add the text.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import React from 'react';
import NavigationBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="homePage.html">INVOICE POSTIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="homePage.html">Home</Nav.Link>
            <Nav.Link href="sendInvoicePage.html">Delivery</Nav.Link>
            <Nav.Link href="receiveInvoicePage.html">Mailbox</Nav.Link>
            <Nav.Link href="#link">Organisations</Nav.Link>
            <Nav.Link href="loginRegistrationPage.html">Login/Registration</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Your Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;

import React from 'react';
  import { Link, Switch, Route } from 'react-router';
  import Nav from './components/NavBar';
  import Page1 from './sendInvoicePage.html';
  import Page2 from './receiveInvoicePage.html';
  import Page3 from './loginRegistrationPage.html';

  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
          <Router>
            <div>
              <Nav />
              <Switch>
                <Route exactly component={Landing} pattern="/" />
                <Route exactly component={Page1} pattern="/path1" />
                <Route exactly component={Page2} pattern="/path2" />
                <Route exactly component={Page3} pattern="/path3" />
                <Route component={Page404} />
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }
*/

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Delivery from './pages/delivery';
import Mailbox from './pages/mailbox';
import LoginRegistration from './pages/loginRegistration';
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
		<Route path='/signin' element={<LoginRegistration />} />
		<Route path='/signup' element={<LoginRegistration />} />
		<Route path='/notifications' element={<Notifications />} />
		<Route path='/signout' element={<SignOut />} />
	</Routes>
	</Router>
	</>
);
}

export default App;

/*
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
*/

