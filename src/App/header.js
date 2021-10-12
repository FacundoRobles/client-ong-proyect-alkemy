import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import ModalLogin from '../components/ModalLogin';
import FormLogin from '../components/FormLogin';

const Header = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const proceed = () => window.location.reload();
    const fieldsTest = {
        email: 'hola@hola.com',
        password: '123456'
    };
    return (
        <>
            <header className="bg mb-2">
                <Container fluid className="p-0 m-0  ml-auto mr-auto">
                    <Row className="p-0 m-0">
                        <Col sm="12" className="p-0 m-0"/>
                    </Row>
                    <Col>
                        <Button onClick={toggle}>Login</Button>
                        <ModalLogin
                            isOpen={modal}
                            toggle={toggle}
                            proceed={proceed}
                            title="Iniciar sesion"
                            buttonConfirm="Entrar"
                            buttonCancel="Cancelar"
                        >
                            <FormLogin fields={fieldsTest}/>
                        </ModalLogin>
                    </Col>
                </Container>
            </header>
        </>
    );
};

export default Header;
