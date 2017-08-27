//Include React
var React = require("react");

// Creating the Form component
 
var SearchPropertyForm = React.createClass({

  getInitialState: function() {
  return {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    rpassword: ""

  }
 },
    handleChange: function(event) {

    this.setState({ [event.target.name]: event.target.value });

  },
  

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
     this.setState({ firstName: "" });
     this.setState({ lastName: "" });
     this.setState({ username: "" });
     this.setState({ email: "" });

  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h2 className="text-center"> Find Exquisite Places To Host Your Event !</h2>

          <form className="form-inline" action="/action_page.php">
            <div className="form-group">
              <label for="city">City:</label>
              <input type="text" className="form-control" id="city" placeholder="Enter City Name" name="city"/>
            </div>
            <div className="form-group">
              <label for="dateFrom">Date From:</label>
              <input type="Date" className="form-control" id="dateFrom" name="dateFrom"/>
            </div>
            <div className="form-group">
              <label for="dateTo">Date To:</label>
              <input type="Date" className="form-control" id="dateTo" name="dateTo"/>
            </div>
            <button type="submit" className="btn btn-success btn-xl">Search</button>
          </form>
        </div>  
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SearchPropertyForm;
















 
  