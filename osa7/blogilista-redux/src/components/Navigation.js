import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Button from 'react-bootstrap/Button'

import { logout } from '../actions/userAction'


const Navigation = (props) => {
  const padding = { paddingRight: 5 }

  const handleLogout = () => {
    props.logout()
  }

  return (
    <Navbar fixed='top' expand='sm' collapseOnSelect bg='dark' variant='dark'>
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
              {props.user.name} logged in {'  '}
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
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)