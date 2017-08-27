// Include React
var React = require("react");

// Here we include all of the sub-components
var ListPropertyForm = require("./Children/ListPropertyForm");
var SearchPropertyForm = require("./Children/SearchPropertyForm");
var Login = require("./Children/LoginPage");
var SignUp = require("./Children/SignUpPage");
var Link = require("react-router").Link;


// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

  
getInitialState: function() {
  return { searchTerm: "", results: "", history: [], isLoggedIn: false, userId: "" };
},

  componentWillMount: function () {
    var self = this;
    helpers.isLoggedIn().then(function (res) {
      self.setState({
        isLoggedIn: res.data.isAuthenticated,
        userId: res.data.userId
      })
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

  handleLogIn: function (userId) {
    this.setState({isLoggedIn: true, userId: userId})
  },

  handleLogOut: function () {
    var self = this;
    helpers.logOut().then(function() {
      self.setState({isLoggedIn: false, userId: ""})
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
        <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span> 
                  </button>
                  <img src="assets/images/Rez-Up-Logo-v2.png" width="90%"/>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                  </ul>
                  <Link to="/list" id="ListPropertyButton" className="btn btn-default navbar-btn" 
                          aria-expanded="false">List Property
                   {/*<a href="../ListPropertyForm.js" id="ListPropertyButton" className="btn btn-default navbar-btn" 
                          aria-expanded="false">*/}
                     <span className="" aria-hidden="true"></span>
                         List Your Event Space
                     <span className="caret"></span>
                   </Link>
                    {this.state.isLoggedIn ? this.renderLogOutButton() : this.renderLoginButtons()}
                  {/*<ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                  </ul>*/}

                </div>
              </div>
            </nav>
          {this.props.children } 
       </div> 
    );
  }
});

module.exports = Main;
