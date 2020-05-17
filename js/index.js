import Vue from 'vue';
import App from './../vue/App';

window.addEventListener('load', () => {
	new Vue({render: createElement => createElement(App)}).$mount('#root');
});


