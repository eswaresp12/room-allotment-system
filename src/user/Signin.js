import React, { useState } from "react";
import { Link} from "react-router-dom";
import Layout from "../core/Layout";
import avatar from './../image/login/avatar.png';
import './../CSS/signin.css';
const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const signUpForm = () => (
        <div className="row display-flex mt-4 mr-5 justify-content-center">
            <div className="col-sm-8 col-xs-10 col-md-4 offset-md-2 offset-sm-2 offset-xs-1 py-4 px-3 rounded-left" id="login-intro-form">
                <h2 className="text-center text-white h2 font-weight-bold mt-2">Welcome back</h2>
                <div className="login-account-wall p-4 mb-2">
                    <img className="rounded-circle mx-auto d-block" src={avatar} alt="" />
                    <form>
                        <div className="form-group mt-3">
                            <label className="text-white font-weight-bold">Email</label>
                            <input
                             onChange={handleChange("email")}
                            type="email"
                            className="form-control"
                            value={email}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label className="text-white font-weight-bold">Password</label>
                            <input
                                onChange={handleChange("password")}
                                type="password"
                                className="form-control"
                                value={password}
                            />
                        </div>
                        <button  className="btn btn-success btn-block rounded font-weight-bold text-center">
                        Submit
                        </button>
                    </form>
                    <div className="text-center">
                    <span className="text-center d-block text-danger font-weight-bold text-italic">or</span>
                    <Link to="/signup" className="text-white">Create an account </Link>
                    </div>
                </div>

            </div>
            <div className="col-sm-8 col-xs-10 col-md-4 rounded-right py-4 px-3" id="login-intro"> 
                <h2 className="login-login-title text-center mt-2 h2">Welcome to Room allotment System</h2>
                
                <p className="text-center text-white ">We Are Happy to see you here. We are working to provide the best services to you.To make students and warden get satisfied, our proposed system will help. Here warden will display
available or allocated floor with their respective year(E1 upto E4).students can register into the website with their caedentials.our website will display the floors which are allocated for the students with their respective years.students can book the available room with their friends.
</p>
             </div> 
        </div>
    );

       return (
        <Layout
            className="container-fluid"
        >
            {signUpForm()}
            
        </Layout>
    );
};

export default Signin;