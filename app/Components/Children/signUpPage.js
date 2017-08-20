// Include React
var React = require("react");

// Creating the Form component
var signUp = React.createClass({

  // Here we set a generic state associated with the text being searched for
  // getInitialState: function() {
  //   return { term: "" };
  // },

  // This function will respond to the user input
  // handleChange: function(event) {

  //   this.setState({ term: event.target.value });

  // },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },
  // Here we describe this component's render method
  render: function() {
    return (

       <div id="content-holder" className="container">
    
      <div className="navbar navbar-default">
        <div className="container-fluid">
      
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
                        <h5 style="display: inline-block;"> Already have an account? </h5> <a href="#"> Sign In </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
     </div> 
    );
  }
});

// Export the component back for use in other files
module.exports = signUp;
