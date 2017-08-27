// Include React
var React = require("react");
var helpers = require("../utils/helpers");


// Creating the Form component
var Login = React.createClass({
 
 getInitialState: function() {
  return ({
    username: "",
    password: ""
  })
 },
    handleChange: function(event) {
      this.setState({ [event.target.name]: event.target.value });

  },
// When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    var self = this;
    event.preventDefault();
    helpers.loginUser(this.state).then(function (res) {
      if (res.data.success) {
        self.props.handleLogIn(res.data.userId);
      }
    })
  },
  // Here we describe this component's render method
  render: function() {
    return (
            <div className="dropdown-menu" style={{"padding": "10px", "width": "300px"}}>
              <form id="signInForm" method='POST' onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input value= {this.state.username} onChange={this.handleChange} id="username" className="form-control input-md" name="username" type="text" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input value= {this.state.password} onChange={this.handleChange} id="password" className="form-control input-md" name="password" type="password" placeholder="Password"/>
                </div>
                <input className="btn btn-primary pull-right" type="submit" name="commit" value="Sign In" />
              </form>
            </div>
     

    );
  }
});

// Export the component back for use in other files
module.exports = Login;
