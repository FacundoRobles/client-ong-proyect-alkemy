import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Col,
    Row
} from 'reactstrap';
import {getRoutes} from '@utils';
import Slider from '@components/Slider';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import Slick from '@components/Slick';
import fromState from '@selectors';
import EditIcon from '@material-ui/icons/Edit';
import separator from '../../images/separador.png';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

const Component = ({
    form,
    userAgent,
    history: {push},
    organization,
    newsTitle,
    testimonialTitle,
    newsButton,
    testimonialButton,
    items,
    news,
    testimonials,
    fetchNewsRequested,
    fetchTestimonialRequested
}) => {
    useEffect(() => {
        fetchNewsRequested({});
    }, [fetchNewsRequested]);
    useEffect(() => {
        fetchTestimonialRequested({});
    }, [fetchTestimonialRequested]);
    const settings = useSelector(fromState.Session.getSlickHomeSettings);
    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;
    return (
        <Row className="text-center p-0 m-0 w-100">
            <Col md="12">
                <Slider items={items}/>
            </Col>
            <Col md="12" className="mt-4">
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
            <Col md="12" className="d-flex justify-content-center mt-4">
                <img src={separator} alt="separator" width="400"/>
            </Col>
            <Col md="12" className="news-col">
                <h2 className="title-md">{newsTitle}</h2>
            </Col>
            <Col md="12">
                <Slick items={news} settings={settings}/>
            </Col>
            <Col md="12" className="mt-4">
                <Link to={mainRoutes.news} className="btn btn-info text-center btn-news-list">
                    {newsButton}
                </Link>
            </Col>
            <Col md="12" className="d-flex justify-content-center mt-4">
                <img src={separator} alt="separator" width="400"/>
            </Col>
            <Col md="12" className="mt-4">
                <h2 className="title-md">{testimonialTitle}</h2>
            </Col>
            <Col md="12" className="mt-4">
                <Slick items={testimonials} settings={settings}/>
            </Col>
            <Col md="12" className="mt-4">
                <Link to={mainRoutes.testimonial} className="btn btn-info text-center btn-news-list">
                    {testimonialButton}
                </Link>
            </Col>
        </Row>
    );
};

Component.propTypes = {
    form: PropTypes.shape({
        welcomeText: PropTypes.string
    }).isRequired,
    userAgent: PropTypes.shape({
        roleId: PropTypes.number
    }).isRequired,
    testimonials: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    news: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
    organization: PropTypes.shape({
        id: PropTypes.number
    }).isRequired,
    newsTitle: PropTypes.string,
    testimonialTitle: PropTypes.string,
    newsButton: PropTypes.string,
    testimonialButton: PropTypes.string,
    fetchNewsRequested: PropTypes.func.isRequired,
    fetchTestimonialRequested: PropTypes.func.isRequired
};

Component.defaultProps = {
    newsTitle: 'Últimas novedades',
    testimonialTitle: 'Testimonios',
    newsButton: 'Ver novedades',
    testimonialButton: 'Ver testimonios'
};
export default Component;
