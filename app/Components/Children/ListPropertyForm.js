// Include React
var React = require("react");

// Creating the Form component
var ListProperty = React.createClass({

// When a user submits...
  // Here we describe this component's render method
  render: function() {
    return (
     <div>
       
            <section class="section">
    <div className="container">
      
      <div className="field is-horizontal">
       <div className="field-label is-normal">
        <label className="label">Venue Name</label>
    </div>
    <div className="field-body">
     <div className="field">
      <p className="control is-expanded has-icons-left">
        
        </p>
    </div>
    <div className="field">
      <p className="control is-expanded has-icons-left has-icons-right">
        <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span className="icon is-small is-left">
          <i className="fa fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fa fa-check"></i>
        </span>
      </p>
    </div>
    </div>
   </div>

   <div className="field is-horizontal">
    <div className="field-label"></div>
     <div className="field-body">
       <div className="field is-expanded">
         <div className="field has-addons">
           <p className="control">
            <a className="button is-static">
            +44
            </a>
            </p>
             <p className="control is-expanded">
              <input className="input" type="tel" placeholder="Your phone number">
             </p>
        </div>
             <p className="help">Do not enter the first zero</p>
        </div>
       </div>
     </div>

    <div className="field-label is-normal">
     <label className="label">Venue Type</label>
    </div>
     <div className="field-body">
      <div className="field is-narrow">
       <div className="control">
        <div className="select is-fullwidth">
          <select>
            <option>Event Space</option>
            <option>Meeting Space</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      </div>
     </div>
    </div>
   <div className="field is-horizontal">
    <div className="field-label is-normal">
    <label className="label">Occupancy</label>
   </div>
   <div className="field-body">
    <div className="field is-narrow">
      <div className="control">
        <div className="select is-fullwidth">
          <select>
            <option>1-50</option>
            <option>50-75</option>
            <option>75-100</option>
            <option>100-125</option>
          </select>
        </div>
      </div>
     </div>
    </div>
  </div>
 <div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">Venue Address</label>
  </div>
   <div className="field-body">
    <div className="field">
      <div className="control">
        <input className="input is-danger" type="text" placeholder="Address">
      </div>
      <p className="help is-danger">
        This field is required
      </p>
    </div>
  </div>
 </div>
 <div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">Amenities</label>
  </div>
  <div className="field-body">
    <div className="field is-narrow">
      <div className="control">
          <label className="checkbox">
              <input type="checkbox">
              Wifi
              <input type="checkbox">
              TV
              <input type="checkbox">
              Speakers
              <input type="checkbox">
              Pool
          </label>
        </div>
      </div>

    </div>
  </div>
  <div className="field">
  <div className="file is-primary">
    <label className="file-label">
      <input className="file-input" type="file" name="resume">
      <span className="file-cta">
        <span className="file-icon">
          <i className="fa fa-upload"></i>
        </span>
        <span className="file-label">
          Upload Pictures
        </span>
      </span>
    </label>
  </div>
</div>

<div className="field is-horizontal">
  <div className="field-label is-normal">
    <label className="label">Brief Venue Description</label>
  </div>
  <div className="field-body">
    <div className="field">
      <div className="control">
        <textarea className="textarea" placeholder="What you'd like your guests to know"></textarea>
      </div>
    </div>
  </div>
</div>

</div>



    );
  }
});


module.exports = ListProperty;
