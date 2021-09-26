import Http from './Api';
import {LOGIN as API, SESSION, LOGIN_AGENT as API_AGENT} from './Urls';

class Login {
    static requestLogin(params) {
        return Http.post(API_AGENT, params, false);
    }

    static requestLoginAgent(params) {
        return Http.post(API_AGENT, params, false);
    }

    static validateUser() {
        return Http.post(SESSION, null, false);
    }

    static validateToken(token) {
        return Http.post('secure', token);
    }

    static requestNewPassword(params) {
        return Http.post(API, params);
    }

    static requestRecoveryPassword(params) {
        return Http.post('person/password-recovery', params, false);
    }

    static requestVerifyTokenPasswordReset(params, token) {
        return Http.post(`person/${token}/verify-token`, params, false);
    }

    static requestResetPasswordConfirm(params, token) {
        return Http.post(`person/${token}/password-reset`, params, false);
    }

    static requestPersonActivate(params) {
        return Http.post(`person/${params}/activate`, null, false);
    }

    static requestAgent(id) {
        return Http.get(`agent/${id}/person`);
    }
}

export default Login;
