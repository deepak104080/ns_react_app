import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
    	<div className="container">
		  <div className="row align-items-start">
		    <div className="col">
		      <h1>About Page.</h1>
		    </div>
		    <div className="col">
		      <button className="btn btn-success">Button</button>
		    </div>
		    <div className="col">
		      One of three columns
		    </div>
		  </div>
		  <div className="row align-items-center">
		    <div className="col">
		      One of three columns
		    </div>
		    <div className="col">
		      One of three columns
		    </div>
		    <div className="col">
		      One of three columns
		    </div>
		  </div>
		  <div className="row align-items-end">
		    <div className="col">
		      One of three columns
		    </div>
		    <div class="col">
		      One of three columns
		    </div>
		    <div className="col">
		      One of three columns
		    </div>
		  </div>
		</div>
    	);
};

export default About;