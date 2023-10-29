import {Container, Nav, Navbar} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Header = () =>{

    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate ('/')}>React-Bootstrap</Navbar.Brand>
                    <Nav className="me-auto" style={{display: 'flex', flexDirection:'row', marginLeft: '15px'}}>
                        <Nav.Link onClick={() => navigate ('/')} style={{marginRight: '20px'}}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate ('/componentes')} style={{marginRight: '20px', marginLeft: '15px'}}>Componentes</Nav.Link>
                        <Nav.Link onClick={() => navigate ('/administracion')} style={{marginRight: '20px', marginLeft: '15px'}}>Administración</Nav.Link>
                    </Nav>
                    
                </Container>
            </Navbar>

        </>
    );

}

export default Header;