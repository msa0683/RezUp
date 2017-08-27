      <div className="navbar navbar-inverse">
        <div id="content-holder" className="container-fluid">
          <div className="navbar navbar-inverse">
            <div className="pull-left navbar-brand">
              <a href="#">REZUP</a>
            </div>

             <div id="navbarForm" className="pull-left">
             <Link to="/list" id="ListPropertyButton" className="btn btn-default navbar-btn" 
                     aria-expanded="false">List Property
              {/*<a href="../ListPropertyForm.js" id="ListPropertyButton" className="btn btn-default navbar-btn" 
                     aria-expanded="false">*/}
                <span className="" aria-hidden="true"></span>
                    List Your Event Space
                <span className="caret"></span>
              </Link>
              </div>
            {this.state.isLoggedIn ? this.renderLogOutButton() : this.renderLoginButtons()}
          </div>
          {/*<div className="jumbotron">
            <h2 className="text-center" style={{'color': 'white', 'textShadow': '3px 3px 10px black', 'fontSize': '54px'}}>REZUP</h2>
              <form className="form-inline pull-left navbar-form form-group" role="form">
                <input type="text" className="form-control" placeholder="San Ramon, CA"/>
                <input type="Date" className="form-control" placeholder="DDMMYY"/>   
                <button type="submit" className="btn btn-primary"> Search </button>
            </form>
          </div> */}
          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}
        </div>
      </div>   