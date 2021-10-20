const mainRoutes = {
    home: '/',
    organization: '/organizations',
    activity: '/activities',
    news: '/news',
    testimonial: '/testimonials',
    contact: '/contact',
    contribute: '/contribute',
    category: '/categories',
    slides: '/slides',
    user: '/users',
    member: '/members',
    us: '/us',
    novelty: '/novelties',
    backOffice: '/backoffice'
};

export default {
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    backOffice: {
        news: {
            list: `${mainRoutes.backOffice}${mainRoutes.news}`,
            form: `${mainRoutes.backOffice}${mainRoutes.news}/new`,
            show: `${mainRoutes.backOffice}${mainRoutes.news}/:id`,
            edit: `${mainRoutes.backOffice}${mainRoutes.news}/:id/edit`
        }
    },
    mainRoutes
};
