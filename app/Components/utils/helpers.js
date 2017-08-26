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
	},

	//Calling axios request to save property details
	saveProperty:function(propertyObj){
		console.log('inside Save Property %%%%%');
		return axios.post("/api/authentication/insert",propertyObj)
		.then(function(res){
			console.log('axios result',res.data._id);
			return res.data._id;
		});
	}
};

module.exports = helpers;