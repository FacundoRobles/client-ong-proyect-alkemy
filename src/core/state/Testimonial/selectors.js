/* eslint-disable import/prefer-default-export */
import get from 'lodash/get';

export const testimonials = state => get(state, 'testimonial.list.testimonials');

export const getSlickTestimonials = () => {
    const testimonials = [
        {
            key: 1,
            imageUrl: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
            title: 'Una noticia importante',
            text: 'Este texto es un adelanto a una nota'
        },
        {
            key: 2,
            imageUrl: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
            title: 'Una noticia importante',
            text: 'Este texto es otro adelanto a una gran nota'
        },
        {
            key: 3,
            imageUrl: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
            title: 'Una noticia importante',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante ac nunc feugiat rhoncus. Nulla facilisi. 
            Pellentesque id facilisis nisi, tristique viverra odio. Vivamus cursus pulvinar gravida. 
            Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`
        },
        {
            key: 4,
            imageUrl: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
            title: 'Una noticia importante',
            text: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
            Nulla dui urna, vulputate quis lobortis eget, vulputate at risus. Nunc non pharetra urna.`
        },
        {
            key: 5,
            imageUrl: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
            title: 'Una noticia importante',
            text: 'Este texto es un adelanto a una nota'
        },
        {
            key: 6,
            imageUrl: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
            title: 'Una noticia importante',
            text: 'Este texto es otro adelanto a una gran nota'
        },
        {
            key: 7,
            imageUrl: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
            title: 'Una noticia importante',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante ac nunc feugiat rhoncus. Nulla facilisi. 
            Pellentesque id facilisis nisi, tristique viverra odio. Vivamus cursus pulvinar gravida. 
            Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`
        },
        {
            key: 8,
            imageUrl: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
            title: 'Una noticia importante',
            text: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
            Nulla dui urna, vulputate quis lobortis eget, vulputate at risus. Nunc non pharetra urna.`
        }
    ];
    return testimonials;
};