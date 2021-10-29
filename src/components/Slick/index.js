import React from 'react';
import {useSelector} from 'react-redux';
import {Col, Row} from 'reactstrap';
import map from 'lodash/map';
import fromState from '@selectors';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CardComponent from '../Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slick = ({items}) => {
    const settings = useSelector(fromState.Session.getSlickSettings);
    return (
        <Row>
            <Col>
                <Slider {...settings}>
                    {map(items, item => (
                        <div className="p-2" key={item.key}>
                            <CardComponent items={item}/>
                        </div>
                    )
                    )}
                </Slider>
            </Col>
        </Row>
    );
};

Slick.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
};
export default Slick;
