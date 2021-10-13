const mainRoutes = {
    home: '/',
    organization: '/organizations',
    activity: '/activities',
    news: '/news',
    testimonial: '/testimonials',
    contact: '/contact',
    contribute: '/contribute',
    login: '/login',
    register: '/register',
    category: '/categories',
    slides: '/slides',
    user: '/users',
    member: '/members'
};

export default {
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    mainRoutes
};
