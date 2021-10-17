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
        path: mainRoutes.news
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
    ],
});