import React from "react";
// import { Link } from 'react-router-dom';
import img from "./assets/batman.png"
// import img2 from "./assets/man.jpg"
export const Home = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Hello!</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>My Name is</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Batman</h5>
                            <p className="card-text" style={{ marginLeft: "1rem" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"  style={{ marginLeft: "1rem" }}><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};