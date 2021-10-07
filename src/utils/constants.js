import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {getRoutes} from '@utils';

const mainRoutes = getRoutes('mainRoutes');

export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARNING = 'warning';
export const LOADING = 'loading';
export const MENUOFFICE = [{
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
