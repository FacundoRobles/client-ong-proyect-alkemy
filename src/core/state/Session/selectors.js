import get from 'lodash/get';
import {getRoutes} from '@utils';

const mainRoutes = getRoutes('mainRoutes');

// eslint-disable-next-line import/prefer-default-export
export const isAuthenticate = state => get(state, 'session.isAuthenticate');

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
