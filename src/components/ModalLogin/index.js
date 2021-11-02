import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import logo from '../../images/LOGO.png';

const ModalLogin = ({
    isOpen,
    toggle,
    proceed,
    children,
    title,
    className,
    buttonConfirm,
    buttonCancel
}) => (
    <Row>
        <Col>
            <Modal isOpen={isOpen} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    <Row>
                        <Col md="6">
                            <img src={logo} alt="logo" width="100px"/>
                        </Col>
                        <Col md="6" className="align-self-center text-center">
                            <h4 className="mb-0">{title}</h4>
                        </Col>
                    </Row>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="btn-proceed" onClick={proceed}>{buttonConfirm}</Button>
                    <Button color="secondary" className="btn-cancel" onClick={toggle}>{buttonCancel}</Button>
                </ModalFooter>
            </Modal>
        </Col>
    </Row>
);

ModalLogin.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func,
    proceed: PropTypes.func,
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    buttonConfirm: PropTypes.string,
    buttonCancel: PropTypes.string
};

ModalLogin.defaultProps = {
    isOpen: false,
    toggle: null,
    proceed: null,
    children: null,
    title: 'Modal title',
    className: 'container-modal',
    buttonConfirm: '',
    buttonCancel: ''
};

export default ModalLogin;
