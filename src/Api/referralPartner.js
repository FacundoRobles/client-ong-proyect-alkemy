import Http from './Api';
import {
    PAYMENTS,
    LEADS,
    PUBLISHEDLPEOFFERS,
    SETTLEMENTS
} from './Urls';

class ReferralPartner {
    static requestDashboard(params) {
        return Http.post(PAYMENTS, params);
    }

    static requestLeads(params) {
        return Http.post(LEADS, params);
    }

    static requestCommissions(params) {
        return Http.post(PAYMENTS, params);
    }

    static requestPublishedLpeOffers(params) {
        return Http.post(PUBLISHEDLPEOFFERS, params);
    }

    static requestSettlements(params) {
        return Http.post(SETTLEMENTS, params);
    }
}

export default ReferralPartner;
