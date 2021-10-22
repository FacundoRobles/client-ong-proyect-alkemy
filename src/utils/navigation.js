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
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    backOffice: {
        category: {
            list: `${mainRoutes.backOffice}${mainRoutes.category}`,
            form: `${mainRoutes.backOffice}${mainRoutes.category}/new`,
            show: `${mainRoutes.backOffice}${mainRoutes.category}/:id`,
            edit: `${mainRoutes.backOffice}${mainRoutes.category}/:id/edit`
        }
    },
    mainRoutes
};
