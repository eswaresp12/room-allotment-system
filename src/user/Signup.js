import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'
import { ToastContainer, toast } from 'react-toastify'
import './../CSS/signup.css'
import FooterPagePro from '../core/Footer'
import 'react-toastify/dist/ReactToastify.css'
let dummy = []
const Signup = () => {
  // const history = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [again, setAgain] = useState('')
  const [data, setData] = useState([])

  const emailHandle = (event) => {
    setEmail(event.target.value)
  }
  const nameHandle = (event) => {
    setName(event.target.value)
  }
  const passHandle = (event) => {
    setPassword(event.target.value)
  }
  const againHandle = (event) => {
    setAgain(event.target.value)
  }

  const clickSubmit = (event) => {
    event.preventDefault()

    if (name === '') {
      toast.error(' name field is requred!', {
        position: 'top-center',
      })
    } else if (email === '') {
      toast.error('email field is requred', {
        position: 'top-center',
      })
    } else if (!email.includes('@')) {
      toast.error('plz enter valid email addres', {
        position: 'top-center',
      })
    } else if (password === '') {
      toast.error('password field is requred', {
        position: 'top-center',
      })
    } else if (password.length < 5) {
      toast.error('password length greater five', {
        position: 'top-center',
      })
    } else if (again !== password) {
      toast.error('password and confirm password should be same', {
        position: 'top-center',
      })
    } else {
      alert('User registered Successfully')
      let userDetails = {
        finalName: name,
        finalEmail: email,
        finalPassword: password,
      }
      let len = localStorage.getItem('user')
      dummy.push(userDetails)
      if (len !== dummy.length) {
        localStorage.setItem('user', JSON.stringify(dummy))
      }
    }
  }

  const signUpForm = () => (
    <div className="container mt-2">
      <div className="row display-flex">
        <div
          className="col-xs-12 col-sm-6 col-md-5 offset-md-1 rounded-left  my-3"
          id="signup-form-intro"
        >
          <div id="signup-form-intro2" className="p-3 my-2 rounded">
            <h2 className="my-2 p-2 text-dark font-weight-bold text-center h2 border-bottom">
              Signup
            </h2>
            <form>
              <div className="form-group">
                <label className="text-dark font-weight-bold">Name</label>
                <input
                  onChange={nameHandle}
                  type="text"
                  className="form-control"
                  // value={name}
                />
              </div>

              <div className="form-group">
                <label className="text-dark font-weight-bold">Email</label>
                <input
                  onChange={emailHandle}
                  type="email"
                  className="form-control"
                  // value={email}
                />
              </div>

              <div className="form-group">
                <label className="text-dark font-weight-bold">Password</label>
                <input
                  onChange={passHandle}
                  type="password"
                  className="form-control"
                  // value={password}
                />
              </div>
              <div className="form-group">
                <label className="text-dark font-weight-bold">
                  Password again
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={againHandle}
                />
              </div>
              <button
                onClick={clickSubmit}
                className="btn btn-success text-white btn-block font-weight-bold mt-4"
              >
                Submit
              </button>
              <div className="text-center py-3 my-2">
                <span className="">Already have an Account ? &nbsp;</span>
                <Link to="/" className="text-danger font-weight-bold">
                  Signin
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-5 rounded-right my-3 shadow-lg"
          id="signup-intro"
        >
          <h2 className=" text-center my-3 p-2 h2">
            Welcome to Room Allotment System
          </h2>
          <p className="text-center py-2">
            We Are Happy to see you here. We are working to provide the best
            services to you.To make students and warden get satisfied, our
            proposed system will help. Here warden will display available or
            allocated floor with their respective year(E1 upto E4).students can
            register into the website with their caedentials.our website will
            display the floors which are allocated for the students with their
            respective years.students can book the available room with their
            friends.
          </p>
          <div>
            <p className="text-center py-1">
              By Signup, you Agree to our terms and Services.{' '}
            </p>
          </div>
          <p className="h5 text-center py-1 my-1 font-weight-bold">
            Let's select our desired Room !!!!
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  )

  return (
    <Layout>
      {signUpForm()}
      <br />
      <FooterPagePro />
    </Layout>
  )
}

export default Signup
