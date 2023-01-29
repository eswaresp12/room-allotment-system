import React from 'react'
import { Link } from 'react-router-dom'
export default function HomeIcon() {
    
    return (
        <section className="mb-3 pb-5 pt-5" style={{background:"#ebeae8"}}>
        <div className="container">

            <div className="row">

                <div className="col-sm-12 col-md-4 mb-2" >
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                        <h2 className="h2  m-2">ME</h2>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                
             
                 <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-battery-half fa-5x" aria-hidden="true"></i>
                       <h4 className="h2  m-2">ECE</h4> 
                       <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>


                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i class="fa fa-desktop fa-5x" aria-hidden="true"></i>
                        <h4 className="h2  m-2">CSE</h4>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-fire fa-5x" aria-hidden="true"></i>
                        <h2 className="h2  m-2">MME</h2>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-flask fa-5x" aria-hidden="true"></i>
                        <h4 className="h2  m-2">CE</h4>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i class="fa fa-wifi fa-5x" aria-hidden="true"></i>
                        <h4 className="h2  m-2">EEE</h4>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i class="fa fa-building fa-5x" aria-hidden="true"></i>
                        <h4 className="h2  m-2">CIVIL</h4>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-book fa-5x" aria-hidden="true"></i>
                        <h2 className="h2  m-2">PUC-1</h2>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
                
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-book fa-5x" aria-hidden="true"></i>
                        <h4 className="h2  m-2">PUC-2</h4>
                        <Link to="/totalroom" >  <p>Choose your room</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
