import React from "react/addons";
import Router from "react-router";
import { Navbar, Nav, MenuItem, DropdownButton } from "react-bootstrap";
import { NavItemLink } from "react-router-bootstrap";
let Link = Router;

export default React.createClass({
  render: function() { 
    return <Navbar brand='React-Bootstrap' inverse toggleNavKey={0}>
    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
      <NavItemLink eventKey={1} to='about'>about</NavItemLink>
      <NavItemLink eventKey={2} to='/'>home</NavItemLink>
      <DropdownButton eventKey={3} title='Dropdown'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    </Nav>
  </Navbar>
  }
});