import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import DaumPostCode from 'vue-daum-postcode';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/css/global-font.scss';
import '@/assets/css/global.scss';

Vue.use(Vuetify);
Vue.use(DaumPostCode);

export default new Vuetify({
});
