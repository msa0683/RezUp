//Include React
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Creating the Form component
 
var DetailsPage = React.createClass({
  
  getInitialState: function () {
    return ({
      property: []
    })
  },

  componentWillMount: function () {
    var self = this;
    helpers.getListingById(this.props.params.id).then(function (res) {
      self.setState({property: res.data})
    })
  },

  // Here we describe this component's render method[0]
  render: function() {
    if(this.state.property[0]){
      console.log('selected property&&&&-->',this.state.property[0]);
      console.log('selected property&&&&-->',JSON.parse(this.state.property[0].images));
      const imgarry = JSON.parse(this.state.property[0].images);
      return (
        <div >
          <div id="detailcontainer" className="container">
              <div className="row">
                <div className="col-md-8">
                  <h3>{this.state.property[0].venueName}</h3>
                  <hr/> 
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      {/*Indicators */}
                      <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                       {/*Wrapper for slides */}
                      <div className="carousel-inner">
                        <div className="item active">
                          <img src={imgarry[0].url} className="carouselimg"/>
                        </div>  
                         <div className="item">
                          <img src={imgarry[1].url} className="carouselimg"/>
                        </div>
                        <div className="item">
                            <img src={imgarry[2].url} className="carouselimg"/>
                        </div>
                      </div>
                    {/*<!-- Left and right controls -->*/}
                      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                  </div>
                   <hr/>
                </div>
                <div className="col-md-4">
                    <div id="pricingpanel" className="panel panel-primary">
                      <div className="panel-heading">Booking Summery</div>
                      <div className="panel-body">Start Date : </div>
                      <div className="panel-body">No of Days : </div>
                      <div className="panel-body">Price Per Day : ${this.state.property[0].price}</div>
                      <div className="panel-body"> Total Cost : </div> 
                      <div className="panel-footer"><button className="btn btn-success center-block">Book Now</button></div>  
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-8">
                    <div id="pricingpanel" className="panel panel-success">
                      <div className="panel-heading">About The Property</div>
                      <div className="panel-body">{this.state.property[0].description} </div>
                    </div>
                    <div  className="panel panel-warning">
                      <div className="panel-heading">Details</div>
                      <div className="panel-body">Venue Type : {this.state.property[0].venueType}</div>
                      <div className="panel-body">Occupancy : {this.state.property[0].occupancy}</div>
                      <div className="panel-body">Amenities : {this.state.property[0].amenities[0]} | {this.state.property[0].amenities[1]} | {this.state.property[0].amenities[2]}</div>
                      <div className="panel-body">Address : {this.state.property[0].address},{this.state.property[0].city},{this.state.property[0].state} {this.state.property[0].postal}</div>
                    </div>


                  </div>
                  <div className="col-md-4">

                  </div>
                </div>
          </div>
        </div>
      )
    }

    return ( <div >No Records </div>);
  }
});

// Export the component back for use in other files
module.exports = DetailsPage;
















 
  