// Include React
var React = require("react");

// Creating the Form component
var ListProperty = React.createClass({

// When a user submits...
  // Here we describe this component's render method
  render: function() {
    return (
       
  <div className="bootstrap-iso">
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-sm-6 col-xs-12">
        <form className="form-horizontal" method="post">
          <div className="form-group ">
            <label className="control-label col-sm-2" for="venueName">
              Venue Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="venueName" name="venueName" placeholder="venueName" />
            </div>
          </div>
          <div className="form-group ">
            <label className="control-label col-sm-2" for="email">
              Email
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="email" name="email" placeholder="alex@smith.com" />
            </div>
          </div>

           <div className="form-group ">
            <label className="control-label col-sm-2" for="venueType">
              Venue Type
            </label>
            <div className="col-sm-10" id="venueType">
             <select>
              <option>Event Space</option>
              <option>Meeting Space</option>
              <option>Others</option>
            </select>
            </div>
           </div>

           <div className="form-group ">
            <label className="control-label col-sm-2" for="occupancy">
              Occupancy
            </label>
            <div className="col-sm-10" id="occupancy">
             <select>
            <option>1-50</option>
            <option>50-75</option>
            <option>75-100</option>
            <option>100-125</option>
            </select>            
           </div>
           </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="occupancy">
              Amenities

            </label>
            <div className="col-sm-10" id="occupancy">
             <label className="checkbox-inline ">
              <input type="checkbox"/>
              Wifi
              </label>
              <label className="checkbox-inline ">
              <input type="checkbox"/>
              TV
              </label>
              <input type="checkbox"/>
              Speakers
              <label className="checkbox-inline ">
              <input type="checkbox"/>
              Pool
             </label>           
           </div>
          </div>
          
          <div className="form-group ">
            <label className="control-label col-sm-2" for="date">
              Date
            </label>
            <div className="col-sm-10">
              <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
            </div>
          </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="time">
              Select Time
            </label>
            <div className="col-sm-10">
              <label className="checkbox-inline ">
            <input type="checkbox" name="time" id="checkbox1" value="9 AM - 12 PM"/> 9 AM - 12 PM
           </label>
           <label className="checkbox-inline">
            <input type="checkbox" name="time" id="checkbox2" value="1 PM - 4 PM"/> 1 PM - 4 PM
           </label>
           <label className="checkbox-inline">
            <input type="checkbox" name="time" id="checkbox1" value="5 PM - 8 PM"/> 5 PM - 8 PM
           </label>
           </div>
           </div>
           <div className="form-group ">
            <label className="control-label col-sm-2" for="price">
              Price
            </label>
            <div className="col-sm-10">
              <input className="form-control" id="price" name="price" placeholder="price" type="text" />
            </div>
          </div>
          <div className="form-group">
         <label>Upload Images</label>
         <div className="input-group">
            <span className="input-group-btn">
                <span class="btn btn-default btn-file">
                    Browse… <input type="file" id="imgInp"/>
                </span>
            </span>
            <input type="text" className="form-control" readonly/>
        </div>
        <img id='img-upload'/>
        </div>
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button className="btn btn-primary " name="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
        
    );
  }
});


module.exports = ListProperty;
