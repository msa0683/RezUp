// Include React
var React = require("react");

// Here we include all of the sub-components
var ListPropertyForm = require("./children/ListPropertyForm");
var SearchPropertyForm = require("./children/SearchPropertyForm");
var Login = require("./children/LoginPage");
var SignUp = require("./children/SignUpPage");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({


  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container-fluid">
       <div id="content-holder" className="container">
        <div className="navbar navbar-inverse">
        <div className="pull-left navbar-brand">
        <a href="#">REZUP</a>
        </div>
      
        <div id="navbarForm" className="pull-right">
         <a href="#" id="registerBtn" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#registerModal">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  Register
            </a>
            <a href="#" id="signInBtn" className="btn btn-default navbar-btn dropdown-toggle" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                  Sign In
                  <span className="caret"></span>
            </a>
            </div>
         </div>

             

          <div className="jumbotron" style={{'backgroundImage': 'url(./assets/images/img1.jpg)', 'height': '400px', 'backgroundPosition': 'center', 'backgroundSize': '100% 100%'}}>
            <h2 className="text-center" style={{'color': 'white', 'textShadow': '3px 3px 10px black', 'fontSize': '54px'}}>REZUP</h2>

             <form className="form-inline pull-left navbar-form form-group" role="form">
                 <input type="text" className="form-control" placeholder="San Ramon, CA"/>
                  <input type="Date" className="form-control" placeholder="DDMMYY"/>
                
                  <button type="submit" className="btn btn-primary"> Search </button>

            </form>
  
          </div>
           
            </div>
        </div>
      

      // <div className="container">
   
      //   <div className="row">

        // </div>
        // </div>

  
           
           
    
    );
  }
});

module.exports = Main;
