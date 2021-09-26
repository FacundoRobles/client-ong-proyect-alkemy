const initialState = {
    requestingSession: true,
    user: {
        userAgent: {}
    },
    isAuthenticate: false,
    reCaptcha: {}
};

// eslint-disable-next-line no-unused-vars
const Session = (state = initialState, {type, ...props}) => {
    switch (type) {
        default:
            return state;
    }
};

export default Session;
