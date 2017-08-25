// Include React
var React = require("react");

// Here we include all of the sub-components
var ListPropertyForm = require("./Children/ListPropertyForm");
var SearchPropertyForm = require("./Children/SearchPropertyForm");
var Login = require("./Children/LoginPage");
var SignUp = require("./Children/SignUpPage");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

  
 getInitialState: function() {
    return { searchTerm: "", results: "", history: [], isLoggedIn: false };
  },

  componentWillMount: function () {
    debugger
    var self = this;
    helpers.isLoggedIn().then(function (res) {
      self.setState({isLoggedIn: res.data})
    })
  },

  renderLoginButtons: function () {
    return (
        <div id="navbarForm" className="pull-right">
          <a href="#" id="signInBtn" className="btn btn-default navbar-btn dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                Sign In
            <span className="caret"></span>
          </a>
          <a href="#" id="registerBtn" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#registerModal">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                Register
          </a>
          <SignUp handleLogIn={this.handleLogIn}/>
          <Login handleLogIn={this.handleLogIn}/>
        </div>
      )
  },

  handleLogIn: function () {
    this.setState({isLoggedIn: true})
  },

  handleLogOut: function () {
    var self = this;
    helpers.logOut().then(function() {
      self.setState({isLoggedIn: false})
    })
  },

  renderLogOutButton: function () {
     return (
        <div id="navbarForm" className="pull-right">
          <a href="#" id="signInBtn" onClick={this.handleLogOut} className="btn btn-default navbar-btn">
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
              Log Out
          </a>
        </div>
      )
  },
  // Here we describe this component's render method
  render: function() {
    // (condition ? (if condition is true do this) : (if condition is false do this)
    return ( 
      <div className="container-fluid">
        <div id="content-holder" className="container">
          <div className="navbar navbar-inverse">
            <div className="pull-left navbar-brand">
              <a href="#">REZUP</a>
            </div>

             <div id="navbarForm" className="pull-left">
              <a href="../ListPropertyForm.js" id="ListPropertyButton" className="btn btn-default navbar-btn" 
                     aria-expanded="false">
                <span className="" aria-hidden="true"></span>
                    List Your Event Space
                <span className="caret"></span>
              </a>
              </div>
            {this.state.isLoggedIn ? this.renderLogOutButton() : this.renderLoginButtons()}
          </div>
          <div className="jumbotron">
            <h2 className="text-center" style={{'color': 'white', 'textShadow': '3px 3px 10px black', 'fontSize': '54px'}}>REZUP</h2>
              <form className="form-inline pull-left navbar-form form-group" role="form">
                <input type="text" className="form-control" placeholder="San Ramon, CA"/>
                <input type="Date" className="form-control" placeholder="DDMMYY"/>   
                <button type="submit" className="btn btn-primary"> Search </button>
            </form>
          </div> 
           <ListPropertyForm/>
        </div>
      </div>            
    );
  }
});

module.exports = Main;
