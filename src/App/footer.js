/* eslint-disable lodash/collection-method-value */
/* eslint no-nested-ternary: "error" */
import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {useSelector} from 'react-redux';
import {getRoutes} from '@utils';
import {Link} from 'react-router-dom';
import '../scss/footer.scss';
import fromState from '@core/selectors';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import logo from '../images/LOGO.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const mainRoutes = getRoutes('mainRoutes');

const Footer = () => {
    const selector = useSelector(fromState.Organization.isOrganization);
    const goPage = val => {
        const network = val;
        window.open(`http://${network}`, '_blank');
    };
    const getNetwork = (val => {
        if (val === 'facebook') {
            return facebook;
        } if (val === 'linkedin') {
            return linkedin;
        }
        return instagram;
    });
    return (
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
                            {!isEmpty(selector) ? (
                                map(selector, (value, key) => (
                                    <li key={{key}}>
                                        <button onClick={() => { goPage(value); }} >
                                            <img
                                                src={getNetwork(key)}
                                                alt="icon network"
                                                className="img-silueta"
                                            />
                                        </button>
                                    </li>
                                ))
                            ) : <></>}
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
};

export default Footer;
