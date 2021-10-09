const mainRoutes = {
    home: '/',
    organization: '/organizations',
    activity: '/activities',
    news: '/news',
    testimonial: '/testimonials',
    contact: '/contact',
    contribute: '/contribute',
    login: '/login',
    register: '/register'
};

export default {
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    mainRoutes
};
