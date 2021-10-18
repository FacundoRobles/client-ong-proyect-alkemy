import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import CardComponent from '../Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../scss/slick.scss';

const Slick = ({items}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {map(items, item => (
                    <div>
                        <CardComponent items={item}/>
                    </div>
                )
                )}
            </Slider>
        </>
    );
};

Slick.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
};
export default Slick;
