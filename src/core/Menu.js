/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = ({ history }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark" id="my-nav">
      <Link className="navbar-brand" to="/">
        Room allotment System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {
            <Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </Fragment>
          }
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Selected Room{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Menu)
