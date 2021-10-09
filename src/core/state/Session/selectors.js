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

const mainRoutes = getRoutes('mainRoutes');

// eslint-disable-next-line import/prefer-default-export
export const isAuthenticate = state => get(state, 'session.isAuthenticate');
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
