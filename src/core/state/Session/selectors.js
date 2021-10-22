import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {getRoutes} from '@utils';
import get from 'lodash/get';

export const isAuthenticate = state => get(state, 'session.isAuthenticate');
export const getRequestFlag = state => get(state, 'session.flagRequest');
export const getUserAgent = state => get(state, 'session.data.user.userAgent');
const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

export const getNavigationHeader = () => {
    const navigationHeader = [
        {
            name: 'home',
            label: 'Inicio',
            uri: mainRoutes.home
        },
        {
            name: 'organizations',
            label: 'Nosotros',
            uri: mainRoutes.organization
        },
        {
            name: 'activities',
            label: 'Actividades',
            uri: mainRoutes.activity
        },
        {
            name: 'news',
            label: 'Novedades',
            uri: mainRoutes.news
        },
        {
            name: 'testimonials',
            label: 'Testimonios',
            uri: mainRoutes.testimonial
        },
        {
            name: 'contact',
            label: 'Contacto',
            uri: mainRoutes.contact
        },
        {
            name: 'contribute',
            label: 'Contribuye',
            uri: mainRoutes.contribute
        }
    ];
    return navigationHeader;
};

export const menuOffice = () => {
    const menu = [{
        title: 'Novedades',
        icon: MenuBookIcon,
        path: backOfficeRoutes.news.list
    }, {
        title: 'Actividades',
        icon: AssignmentRoundedIcon,
        path: mainRoutes.activity
    }, {
        title: 'Categorias',
        icon: FormatListBulletedIcon,
        path: mainRoutes.category
    }, {
        title: 'Testimonios',
        icon: ChatRoundedIcon,
        path: mainRoutes.testimonial
    }, {
        title: 'Organizacion',
        icon: HomeWorkIcon,
        path: mainRoutes.organization
    }, {
        title: 'Slides',
        icon: PhotoLibraryRoundedIcon,
        path: mainRoutes.slides
    }, {
        title: 'Usuarios',
        icon: PersonIcon,
        path: mainRoutes.user
    }, {
        title: 'Miembros',
        icon: PeopleAltIcon,
        path: mainRoutes.member
    }];

    return menu;
};

export const getLoginInit = () => ({
    form: {
        email: '',
        password: ''
    },
    fields: [
        {
            label: 'Email',
            placeholder: 'Email',
            type: 'email',
            id: 'email',
            name: 'email'
        },
        {
            label: 'Contraseña',
            placeholder: 'Contraseña',
            type: 'password',
            id: 'password',
            name: 'password'
        }
    ]
});

export const getSlickSettings = () => {
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
    return settings;
};

export const getSliderItems = () => {
    const items = [{
        key: 1,
        imageUrl: 'https://wallpaperaccess.com/full/170249.jpg',
        text: 'A great landscape'
    },
    {
        key: 2,
        imageUrl: 'https://fondosmil.com/fondo/2256.jpg',
        text: 'A greater landscape'
    },
    {
        key: 3,
        imageUrl: 'https://www.solofondos.com/wp-content/uploads/2016/04/3e2af664e061013a3d05aa99fa20c1d4.jpg',
        text: 'A greatest landscape'
    }
    ];
    return items;
};

export const getWelcomeText = () => {
    const text = 'Texto de bienvenida';
    return text;
};
