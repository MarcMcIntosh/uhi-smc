import React from "react/addons";
import Router from "react-router";
import PageHeader from "react-bootstrap/lib/PageHeader";
import { Grid, Col, Row, Jumbotron, Button, Panel, Well} from "react-bootstrap";

export default React.createClass({
	render: function() {
		return <Grid>
			<Panel header={<h3> This Repository </h3>} >
			Just a thing of uni
			</Panel>
			<Panel header={<h3> About me </h3>} >
			Contact me via github or check out my site <a href="http://www.marcmcintosh.ninja"> marcmcintosh.ninja </a>
			</Panel>
		</Grid>
	}
})