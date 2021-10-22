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
    editProfile: '/edit-profile',
    backOffice: '/backoffice'
};

export default {
    backOffice: {
        news: {
            list: `${mainRoutes.backOffice}${mainRoutes.news}`,
            form: `${mainRoutes.backOffice}${mainRoutes.news}/new`,
            show: `${mainRoutes.backOffice}${mainRoutes.news}/:id`,
            edit: `${mainRoutes.backOffice}${mainRoutes.news}/:id/edit`
        },
        testimonial: {
            list: `${mainRoutes.backOffice}${mainRoutes.testimonial}`,
            form: `${mainRoutes.backOffice}${mainRoutes.testimonial}/new`,
            edit: `${mainRoutes.backOffice}${mainRoutes.testimonial}/:id`
        },
    },
    mainRoutes
};
