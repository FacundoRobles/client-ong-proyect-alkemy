import get from 'lodash/get';

const path = 'news';

export const getNewsForm = state => get(state, `${path}.newsForm`);
export const getNewsFields = state => get(state, `${path}.newsFields`);
export const news = state => get(state, 'news.list.news');

export const getSlickNews = () => {
    const news = [
        {
            imageUrl: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
            title: 'Una noticia importante',
            text: 'Este texto es un adelanto a una nota'
        },
        {
            imageUrl: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
            title: 'Una noticia importante',
            text: 'Este texto es otro adelanto a una gran nota'
        },
        {
            imageUrl: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
            title: 'Una noticia importante',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante ac nunc feugiat rhoncus. Nulla facilisi. 
            Pellentesque id facilisis nisi, tristique viverra odio. Vivamus cursus pulvinar gravida. 
            Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`
        },
        {
            imageUrl: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
            title: 'Una noticia importante',
            text: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
            Nulla dui urna, vulputate quis lobortis eget, vulputate at risus. Nunc non pharetra urna.`
        },
        {
            imageUrl: 'https://www3.pictures.itsrosy.com/mp/Vw5LjH_gfy2l.jpg',
            title: 'Una noticia importante',
            text: 'Este texto es un adelanto a una nota'
        },
        {
            imageUrl: 'https://www.gannett-cdn.com/media/2020/08/30/USATODAY/usatsports/247WallSt.com-247WS-731827-imageforentry5310.jpg?width=2560',
            title: 'Una noticia importante',
            text: 'Este texto es otro adelanto a una gran nota'
        },
        {
            imageUrl: 'https://www.momondo.com/discover/wp-content/uploads/sites/260/2017/11/56dc3858-4b63-3d46-a666-7533edc4bedf.jpg',
            title: 'Una noticia importante',
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ante ac nunc feugiat rhoncus. Nulla facilisi. 
            Pellentesque id facilisis nisi, tristique viverra odio. Vivamus cursus pulvinar gravida. 
            Fusce eros orci, ornare non nisl at, convallis posuere odio. Donec sodales luctus volutpat.`
        },
        {
            imageUrl: 'https://educationpost.org/wp-content/uploads/2020/01/current-events-880x393-716x320.jpg',
            title: 'Una noticia importante',
            text: `Praesent ac pharetra turpis. Vivamus lacinia gravida odio, et eleifend felis tempor nec. Quisque in augue eros. 
            Nulla dui urna, vulputate quis lobortis eget, vulputate at risus. Nunc non pharetra urna.`
        }
    ];
    return news;
};
