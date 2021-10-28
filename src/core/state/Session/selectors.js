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
export const getUserAgent = state => get(state, 'session.user.userAgent');
export const getFormWelcomeText = state => get(state, 'session.form');
export const getFieldsWelcomeText = state => get(state, 'session.fields');
export const getSliderItems = state => get(state, 'session.form.items');
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
        path: backOfficeRoutes.category.list
    }, {
        title: 'Testimonios',
        icon: ChatRoundedIcon,
        path: backOfficeRoutes.testimonial.list
    }, {
        title: 'Organizacion',
        icon: HomeWorkIcon,
        path: backOfficeRoutes.organization.list
    }, {
        title: 'Slides',
        icon: PhotoLibraryRoundedIcon,
        path: backOfficeRoutes.slides.edit
    }, {
        title: 'Usuarios',
        icon: PersonIcon,
        path: backOfficeRoutes.user.list
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

export const getSlickHomeSettings = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
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

export const getSlickSettings = () => {
    const settings = {
        dots: true,
        accesibility: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
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