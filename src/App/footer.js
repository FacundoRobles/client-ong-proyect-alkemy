import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {getRoutes} from '@utils';
import {Link} from 'react-router-dom';
import '../scss/footer.scss';
import logo from '../images/LOGO.png';
import silueta from '../images/silueta.png';

const mainRoutes = getRoutes('mainRoutes');

const Footer = () => (
    <footer className="top-more fixed">
        <Container fluid>
            <Row className="link-container margin-bottom">
                <Col xs="6" sm="4">
                    <Row>
                        <ul className="link-list">
                            <Col>
                                <Link to={mainRoutes.news}>
                                    <li>Noticias</li>
                                </Link>
                            </Col>
                            <Col>
                                <Link to={mainRoutes.activity}>
                                    <li>Actividades</li>
                                </Link>
                            </Col>
                            <Col>
                                <Link to={mainRoutes.novelty}>
                                    <li>Novedades</li>
                                </Link>
                            </Col>
                        </ul>
                    </Row>
                </Col>
                <Col xs="6" sm="4" className="text-center">
                    <img src={logo} alt="logo" id="img-logo"/>
                </Col>
                <Col sm="4">
                    <Row className="text-center">
                        <ul className="link-list">
                            <Col>
                                <Link to={mainRoutes.testimonial}>
                                    <li>Testimonios</li>
                                </Link>
                            </Col>
                            <Col>
                                <Link to={mainRoutes.us}>
                                    <li>Nosotros</li>
                                </Link>
                            </Col>
                            <Col>
                                <Link to={mainRoutes.contact}>
                                    <li>Contacto</li>
                                </Link>
                            </Col>
                        </ul>
                    </Row>
                </Col>
            </Row>
            <Row className="link-container margin-bottom align-center">
                <Col sm="auto" class="container-link-social">
                    <ul className="link-social">
                        <li>
                            <a href="https://facebook.com">
                                <img src={silueta} alt="icono Facebook" className="img-silueta"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <img src={silueta} alt="icono Instagram" className="img-silueta"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <img src={silueta} alt="icono Twitter" className="img-silueta"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://whatsapp.com">
                                <img src={silueta} alt="icono WhatsApp" className="img-silueta"/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center margin-bottom">
                <Col sm="auto">
                    <span id="rights-text">2021 by Alkemy. All Rights Reserved.</span>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;