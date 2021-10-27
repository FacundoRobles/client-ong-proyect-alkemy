import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Button
} from 'reactstrap';
import {getRoutes} from '@utils';
import Slider from '@components/Slider';
// import map from 'lodash/map';
import {Link} from 'react-router-dom';
import Slick from '@components/Slick';
import fromState from '@selectors';

const mainRoutes = getRoutes('mainRoutes');

const Component = ({
    welcomeText
}) => {
    const items = useSelector(fromState.Session.getSliderItems);
    const news = useSelector(fromState.News.getSlickNews);
    const testimonials = useSelector(fromState.Testimonial.getSlickTestimonials);

    return (
        <>
            <Slider items={items}/>
            <Row>
                <Col className="center-col">
                    <h1 className="title-lg">{welcomeText}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="news-col">
                    <h1 className="title-md">Últimas novedades</h1>
                </Col>
            </Row>
            <Row><Col className="slick-col"><Slick items={news}/></Col></Row>
            <Row>
                <Col className="center-col">
                    <Link to={mainRoutes.news}>
                        <Button outline color="primary" className="btn-news">Ver noticias</Button>
                    </Link>
                </Col>
            </Row>
            <Row><Col className="center-col-test"><h1 className="title-md">Testimonios</h1></Col></Row>
            <Row><Col className="slick-col"><Slick items={testimonials}/></Col></Row>

        </>
    );
};

Component.propTypes = {
    welcomeText: PropTypes.string.isRequired
};

export default Component;
