import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

import { onLogout } from '../actions/userAction'

import { Navbar, NavbarBrand, Nav, Button } from 'react-bootstrap'


const Navigation = (props) => {
  const padding = { paddingRight: 5 }

  const handleLogout = () => {
    props.onLogout()
  }

  return (
    <Navbar fixed='top' expand='sm' collapseOnSelect bg='dark' variant='dark'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarBrand>B L O G S - A P P</NavbarBrand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text>
            <NavLink style={padding} to='/blogs'>blogs</NavLink>
          </Navbar.Text>
          <Navbar.Text>
            <NavLink style={padding} to='/users'>users</NavLink>
          </Navbar.Text>
          {props.user
            ?<Navbar.Text>
              <em>{props.user.name} logged in {'  '}</em>
              <Button style={padding} variant="danger" size='sm' onClick={handleLogout}>
                  Logout
              </Button>
            </Navbar.Text>
            : <Navbar.Text>
              <NavLink style={padding} to='/login'>login</NavLink>
              <Redirect to="/login" />
            </Navbar.Text>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = {
  onLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)