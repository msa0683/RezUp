
// Include React
var React = require("react");

// Creating the Form component
var Login = React.createClass({

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
    
    
         <div className="dropdown-menu" style="padding: 10px; width: 300px">
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
        
     
    );
  }
});

// Export the component back for use in other files
module.exports = Login;















 
  