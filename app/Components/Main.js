// Include React
var React = require("react");

// Here we include all of the sub-components
var ListPropertyForm = require("./children/ListPropertyForm");
var SearchPropertyForm = require("./children/SearchPropertyForm");
var Login = require("./children/LoginPage");
var SignUp = require("./children/SignUpPage");

import DatePicker from 'material-ui/DatePicker';
//import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import $ from 'jquery';

import {Form, Field} from 'simple-react-form'

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

function disablePrevDates(startDate) {
  const startSeconds = Date.parse(startDate);
  return (date) => {
    return Date.parse(date) < startSeconds;
  }
}
var date = new Date();
var Main = React.createClass({

 getInitialState: function() {
    return { searchTerm: "", results: "", history: []};
  },

  //this.handleChange = this.handleChange.bind(this);

  /*handleChange: function() {
    $('#datepickstart').datepicker().on('changeDate', function() {
      var temp = $(this).datepicker('getDate');
      var d = new Date(temp);
      d.setDate(d.getDate() + 1);
      $('#datepickend').datepicker({
       autoclose: true,
       format: 'DDMMYY',
       startDate: d
      })
  }),*/

  /*handleDateTimeSelect: function(date) {
    if (date < moment()) {
      date = moment();
    }
    this.setState({ date });
  },*/

  /*handleDateTimeSelect: function(date) {
    const currentDate = moment();
    date = date < currentDate ? currentDate : date;
    this.setState({ date });
  },*/

  /*isValidDate: function(dt) {
    return (dt >= (moment().startOf('day')))
      && (dt <= moment().add(30, 'days'))
      && moment().subtract(1, 'minute');
  },*/
  // Here we describe this component's render method
  render: function() {
    const startDate = new Date();
    return (
      <div className="container-fluid">
        <div id="content-holder" className="container">
          <div className="navbar navbar-inverse">
            <div className="pull-left navbar-brand">
              <a href="#">REZUP</a>
            </div>
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
              <SignUp/>
              <Login/>
            </div> 
          </div>
          <div className="jumbotron" style={{'backgroundImage': 'url(./assets/images/img1.jpg)', 'height': '400px', 'backgroundPosition': 'center', 'backgroundSize': '100% 100%'}}>
            <h2 className="text-center" style={{'color': 'white', 'textShadow': '3px 3px 10px black', 'fontSize': '54px'}}>REZUP</h2>
              <form className="form-inline pull-left navbar-form form-group" role="form">
                <input type="text" className="form-control" placeholder="San Ramon, CA"/>
                {/*<Field fieldName='date' label='A Date' type={DatePicker}/>*/} 
                {/*<DatePicker 
                  hintText="Check-in" 
                  shouldDisableDate={disablePrevDates(startDate)}
                />*/}
                {/*<DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />;*/}
                {/*<DateTime
                  value={date}
                  *dateFormat="D MMM YYYY"*
                  isValidDate={this.isValidDate}
                  onChange={(_date) => this.handleDateTimeSelect(_date)}
                />*/}
                <MuiThemeProvider>
                <span>
                  <DatePicker 
                    hintText="Calendar" 
                    shouldDisableDate={disablePrevDates(startDate)}
                  />
                </span>
                </MuiThemeProvider>
                <button type="submit" className="btn btn-primary"> Search </button>
            </form>
          </div>  
        </div>
      </div>            
    );
  }
});

module.exports = Main;
