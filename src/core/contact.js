import React from 'react'
import Layout from './Layout';
import FooterPagePro from './Footer';
export default function Contact() {
    return (
        <Layout>
            <div className="container" id="banner1">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <div className="card my-4">
                    <div className="card-header text-center bg-success">
                        <h3 className="text-center font-weight-bold text-white">Contact Us</h3>
                        <i className="fa fa-envelope fa-4x text-center text-white" aria-hidden="true"></i>
                        <p className="text-justify m-3 text-white">Room allotment System will created oppurtunity to find better roommates. If you find any bugs please contact us.</p>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h4 className="text-info"><i class="fa fa-thumb-tack fa-1x" aria-hidden="true"></i> Location</h4>
                            </li>
                            <li className="list-group-item">Room Allotment System</li>
                            <li className="list-group-item ">AP IIIT RGUKT RK VALLEY</li>
                            <li className="list-group-item">517643</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6">
            <div className="card my-4 px-3">
                <h3 className="p-2 text-center my-2 text-success">Please Fill Out this Form</h3>
                <form method="POST" action="">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" required="true" pattern=".{1,}" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                    </div>
                    <div className="form-group">
                        <label for="contact">Contact No.</label>
                        <input type="text" className="form-control" name="contact" placeholder="Contact" required="true" pattern=".{10}" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <input type="text" className="form-control" name="message" placeholder="message" />
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit" value="Submit" name="button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
    <FooterPagePro /> 
        </Layout>
    )
}
