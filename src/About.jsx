import React from "react";
// import { Link } from 'react-router-dom';
import img1 from "./assets/man.jpg"
// import img1 from "./assets/man.jpg"
export const About = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">

                    {/* <div className="col-md-8"> */}
                        <div className="col-md-6" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                            <div className="card-body text-end">
                                <h5 className="card-title m-2" style={{ fontSize: "4rem" }}>Hello!</h5>
                                <h5 className="card-title m-2" style={{ fontSize: "4rem" }}>My Name is</h5>
                                <h5 className="card-title m-2" style={{ fontSize: "4rem" }}>Batman</h5>
                                <p className="card-text" style={{ marginLeft: "1rem" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text" style={{ marginLeft: "1rem" }}><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    {/* </div> */} 
                    <div className="col-md-6">
                        {/* <img src={img1} className="img-fluid" alt="..." style={{ height: "447px" }} /> */}
                    </div>
                </div>
            </div>
        </div>

    );
};