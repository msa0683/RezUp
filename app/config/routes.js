// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../Components/Main");

var ListPropertyForm = require("../Components/Children/ListPropertyForm");
//var Saved = require("../components/Saved");
var SearchProperty = require("../Components/Children/SearchPropertyForm");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* If user selects list show the appropriate component */}
      <Route path="list" component={ListPropertyForm} />
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={SearchProperty} />
     </Route>
  </Router>
);
