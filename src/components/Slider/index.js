import React, {useState} from 'react';
import map from 'lodash/map';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import PropTypes from 'prop-types';

const Slider = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) { return; }
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) { return; }
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = newIndex => {
        if (animating) { return; }
        setActiveIndex(newIndex);
    };

    const slides = map(items, item => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img src={item.imageUrl} alt={item.text}/>
            <CarouselCaption captionText={item.text}/>
        </CarouselItem>
    ));

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    );
};

Slider.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
};
export default Slider;
