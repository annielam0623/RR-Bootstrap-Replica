import { Navbar, Nav } from 'react-bootstrap'


export default function TopBar() {
    return
    <Navbar sticky='top' bg="light" expand="lg" style={{paddingRight: '20px', alignItems: 'center'}} >
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
            <img src="./assets/logo.svg" alt="logo" style={{verticalAlign: 'inherit'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link href="#LogIn" className='log-in'>Log In</Nav.Link>
                <button className="sign-up">Sign Up</button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

}