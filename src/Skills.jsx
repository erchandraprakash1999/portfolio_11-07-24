import React from "react";
// import { Link } from 'react-router-dom';
import img2 from "./assets/man_2.jpg"
// import img1 from "./assets/man.jpg"
export const Skills = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container-fluid" >
                        <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                            <div className="row g-0">
                                <div className="col-md-6 img-fluid" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>

                                </div>

                                <div className="col-md-6" >
                                    <div className="card" style={{ height: '450px' }}>


                                        <div className="card-body" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                                            <p className="card-text mx-5" style={{ fontSize: '2rem' }}>
                                                <b>Good Desgin Keep the User Happy, the Manufacturer in the Black and the Aesthete Unoffended.</b>
                                            </p>
                                            <p className="card-text text-danger mx-5" style={{ fontSize: '1.5rem' }}>We're Creative Minds</p>
                                            <p className="card-text px-5 text-secondary" style={{ fontSize: '1.2rem' }}>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ratione in! Cupiditate aspernatur pariatur placeat, inventore eum, ducimus ipsum aliquam accusantium aut porro rerum tenetur nobis voluptatem aliquid suscipit quos!
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ratione in! Cupiditate aspernatur pariatur placeat, inventore eum, ducimus ipsum aliquam accusantium aut porro rerum tenetur nobis voluptatem aliquid suscipit quos!
                                            </p>
                                            <button className="btn btn-danger px-4 py-1 mt-3 mb-2" style={{ fontSize: '0.8rem', marginLeft: '3rem' }}><b>View Skills</b></button>
                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container-fluid" style={{ height: "450px", overflowY: "auto" }} >
                        <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                            <div className="row m-3 mx-5 " style={{ fontSize: '1.3rem' }}>
                                <div className="col-md-3 ">
                                    <p className="card-title"><b>Thinking</b><br /></p>
                                    <p className="card-text text-secondary">
                                        Provided Creative ideas constructive feedback to others visual and non-visual thinkers or designers
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <p className="card-title"><b>Design</b><br /></p>
                                    <p className="card-text text-secondary">
                                        Prototyped visual design concepts, designed icons and provided solution for a new navigations systems.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <p className="card-title"><b>Sketches</b><br /></p>
                                    <p className="card-text text-secondary">
                                        Delievered high quality design code: Sketches, Sitemap, User flow, Wireframe, Mockups, Specifications.
                                    </p>
                                </div>
                                <div className="col-md-3 ">
                                    <p className="card-title"><b>Thinking</b><br /></p>
                                    <p className="card-text text-secondary">
                                        Provided Creative ideas constructive feedback to others visual and non-visual thinkers or designers
                                    </p>
                                </div>
                            </div>
                            <hr className="m-5" />
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                            <header><b>HTML</b></header>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '90%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                90% 
                                            </div>
                                        </div>
                                        <header className="progress-title mt-3"><b>CSS & Bootstrap</b></header>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '85%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                85% 
                                            </div>
                                        </div>
                                        <header className="progress-title mt-3"><b>JavaScript</b></header>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '75%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                75% 
                                            </div>
                                        </div>
                                        <header className="progress-title mt-3"><b>React.js</b></header>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '75%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                75% 
                                            </div>
                                        </div>
                                        <header className="progress-title mt-3"><b>Python</b></header>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '80%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                80% 
                                            </div>
                                        </div>
                                        <header className="progress-title mt-3"><b>Django</b></header>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: '70%' }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                70% 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row p-5">
                                            <div className="col-md-6"><b>Graphic</b></div>
                                            <div className="col-md-6"><b>Logo</b></div>
                                        </div>
                                        <div className="row p-5">
                                            <div className="col-md-6"><b>Webdesign</b></div>
                                            <div className="col-md-6"><b>Application</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="Slide 3" />
          </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
