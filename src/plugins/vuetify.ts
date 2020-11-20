import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);
export default new Vuetify({
    rtl: false,
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#EEA243',
                accent: '#F3D34A',
                secondary: '#F3E37C',
                success: '#F3A738',
                info: '#F1D9A7',
                warning: '#F3A738',
                error: '#F3A738'
            },
            light: {
                primary: '#1976D2',
                accent: '#e91e63',
                secondary: '#30b1dc',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        }
    }
});