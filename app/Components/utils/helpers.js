var axios = require('axios');

var helpers = {
	registerUser: function (userData) {
		axios.post('/signup', userData)
	},

	loginUser: function (userData) {
		debugger
		axios.post('/login', userData)
	}
}

module.exports = helpers