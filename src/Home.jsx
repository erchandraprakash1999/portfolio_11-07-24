import React from "react";
// import { Link } from 'react-router-dom';
import img from "./assets/batman.png"
// import img2 from "./assets/man.jpg"
export const Home = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <header>
                           <p className="card-text text-center"  style={{ marginLeft: "1rem" }}><small className="text-body-secondary">Page 1</small></p>
                            </header>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Hello!</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>My Name is</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Udit Narayan</h5>
                            <p className="card-text text-danger" style={{ marginLeft: "1rem", fontSize: "1.5rem" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <header>
                            <p className="card-text text-center"  style={{ marginLeft: "1rem" }}><small className="text-body-secondary">Page 2</small></p>
                            </header>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>I am Creative</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>MERN Stack Developer</h5>
                            {/* <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Batman</h5> */}
                            <p className="card-text text-danger" style={{ marginLeft: "1rem", fontSize: "1.5rem" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="carousel-item">
    <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <header>
                            <p className="card-text text-center"  style={{ marginLeft: "1rem" }}><small className="text-body-secondary">Page 3</small></p>
                            </header>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Yes I Believe</h5>
                            <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>In Quality</h5>
                            {/* <h5 className="card-title m-2 " style={{ fontSize: "4rem" }}>Batman</h5> */}
                            <p className="card-text text-danger" style={{ marginLeft: "1rem", fontSize: "1.5rem" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    );
};
       