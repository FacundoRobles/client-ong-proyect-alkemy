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
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import Slick from '@components/Slick';
import fromState from '@selectors';
import EditIcon from '@material-ui/icons/Edit';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    userAgent,
    items,
    history: {push},
    organization,
    newsTitle,
    testimonialTitle,
    newsButton
}) => {
    const news = useSelector(fromState.News.getSlickNews);
    const testimonials = useSelector(fromState.Testimonial.getSlickTestimonials);
    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;
    return (
        <>
            <Slider items={items}/>
            <Row className="text-center">
                <Col md="12">
                    <h1 className="title-lg">{form.welcomeText}</h1>
                </Col>
                <Col md="12">
                    {roleId === 1 && (
                        <EditIcon
                            onClick={() => push(`${backOfficeRoutes.slides.list}/${organization.id}`)}
                            className="icon-testimonial align-self-center pointer m-2"
                            role="button"
                        />
                    )}
                </Col>
            </Row>
            <Row>
                <Col className="news-col">
                    <h1 className="title-md">{newsTitle}</h1>
                </Col>
            </Row>
            <Row><Col className="slick-col"><Slick items={news}/></Col></Row>
            <Row>
                <Col className="center-col">
                    <Link to={mainRoutes.news}>
                        <Button
                            outline
                            color="primary"
                            className="btn-news"
                        >
                            {newsButton}
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="center-col-test">
                    <h1 className="title-md">{testimonialTitle}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="slick-col">
                    <Slick items={testimonials}/>
                </Col>
            </Row>
        </>
    );
};

Component.propTypes = {
    form: PropTypes.shape({
        welcomeText: PropTypes.string
    }).isRequired,
    userAgent: PropTypes.shape({
        roleId: PropTypes.number
    }).isRequired,
    items: PropTypes.arrayOf().isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    organization: PropTypes.shape({
        id: PropTypes.number
    }).isRequired,
    newsTitle: PropTypes.string,
    testimonialTitle: PropTypes.string,
    newsButton: PropTypes.string
};

Component.defaultProps = {
    newsTitle: 'Últimas novedades',
    testimonialTitle: 'Testimonios',
    newsButton: 'Ver noticias'
};
export default Component;
