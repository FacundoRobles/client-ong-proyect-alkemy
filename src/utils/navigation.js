const mainRoutes = {
    home: '/',
    testimonial: '/testimonials',
    category: '/categories',
    news: '/news',
    organization: '/organization',
    slides: '/slides',
    user: '/users',
    member: '/members',
    activity: '/activities'
};

export default {
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    mainRoutes
};
