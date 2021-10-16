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
    novelty: '/novelties'
};

export default {
    testimonial: {
        list: mainRoutes.testimonial,
        form: `${mainRoutes.testimonial}/form`,
        edit: `${mainRoutes.testimonial}/:id`
    },
    mainRoutes
};
