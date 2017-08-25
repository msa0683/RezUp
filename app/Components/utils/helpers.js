var axios = require('axios');

var helpers = {
	registerUser: function (userData) {
		return axios.post('/api/authentication/register', userData)
	},

	loginUser: function (userData) {
		return axios.post('/api/authentication/login', userData)
	},

	isLoggedIn: function () {
		return axios.get('/api/authentication/authenticated');

	},

	logOut: function () {
		return axios.get('/api/authentication/logout')
	}
};

module.exports = helpers;