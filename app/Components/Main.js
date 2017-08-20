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
            <div className="dropdown-menu" style={{"padding": "10px", "width": "300px"}}>
              <form id="signInForm">
                <div className="form-group">
                  <input id="username" className="form-control input-md" type="text" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input id="password" className="form-control input-md" type="text" placeholder="Password"/>
                </div>
                <input className="btn btn-primary pull-right" type="submit" name="commit" value="Sign In" />
              </form>
            </div>

            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header"> <h3> Register with RezUp! </h3> </div>
                    <div className="modal-body">
                    
                      <form className="form" id="registrationForm">
                          <div className="form-group">
                              <input id="ruser" className="form-control" type="text" placeholder="Username" />
                          </div>
                          <div className="form-group">
                              <input id="remail" className="form-control" type="text" placeholder="Email" />
                          </div>
                          <div className="form-group">
                              <input id="rpassword" className="form-control" type="password" placeholder="Password" />
                          </div>
                          <div className="form-group">
                              <input id="rptpassword" className="form-control" type="password"
                                      placeholder="Repeat Password" />
                          </div>
                          <input className="btn btn-primary" type="submit" name="register" value="Register" />
                      </form>
                    </div>
                    <div className="modal-footer">
                        <h5 style={{"display": "inline-block"}}> Already have an account? </h5> <a href="#"> Sign In </a>
                    </div>
                </div>
            </div>
          </div>
        
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
           
    
    );
  }
});

module.exports = Main;
