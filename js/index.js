import Vue from 'vue';
import App from './../vue/App';

window.addEventListener('load', () => {
	console.log('asdsad');
	new Vue({render: createElement => createElement(App)}).$mount('#root');
});


