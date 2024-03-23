import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
const NavBar = ({showMenu,setShowMenu}) => {
    const toggleMenuOn = () =>{
        setShowMenu(true)
      }
      const toggleMenuOff = () =>{
        setShowMenu(false)
      }
    if(window.innerWidth > 1080){
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary navBar" sticky="top">
            <Container>
                <Navbar.Brand ><Link to="/" className='navBarLink text-black' onClick={toggleMenuOff}>React-Bootstrap</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ><Link to="/productos" className='navBarLink text-black' onClick={toggleMenuOn}>Productos</Link></Nav.Link>
                    <Nav.Link><Link to="/carrito" className='navBarLink text-black' onClick={toggleMenuOff}>Carrito</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );}else{
        return ( 
            <Navbar expand="lg" className="bg-body-tertiary navBar" sticky="top">
                <Container>
                    <Navbar.Brand ><Link to="/" className='navBarLink' onClick={toggleMenuOff}>React-Bootstrap</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/productos" className='navBarLink' onClick={toggleMenuOn}>Todo</Link></NavDropdown.Item>
                                <NavDropdown.Item >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link><Link to="/carrito" className='navBarLink' onClick={toggleMenuOff}>Carrito</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         );
     }
}
 
export default NavBar;