import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gizmo.rakuten.tv/',
    params: {
        classification_id: 5,
        device_identifier: "web",
        locale: "es",
        market_code: "es"
    }
});

instance.all = axios.all;

export default instance;