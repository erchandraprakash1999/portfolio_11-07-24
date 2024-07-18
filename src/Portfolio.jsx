import React from "react";
import food1 from "./assets/food_1.jpg"
import food2 from "./assets/food_2.jpg"
import food3 from "./assets/food_3.jpg"
import food4 from "./assets/food_4.jpg"
import img5 from "./assets/man_5.jpg"
export const Portfolio = () => {
    return (

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="container-fluid" >
                        <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                            <div className="row g-0">
                                <div className="col-md-6 img-fluid " style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>

                                </div>

                                <div className="col-md-6" >
                                    <div className="card" style={{ height: '450px' }}>


                                        <div className="card-body" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                                            <p className="card-text" style={{ marginLeft: '5rem', fontSize: '3rem' }}>
                                                <b>Other Things</b><br />
                                                <b>I've Designed.</b>
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                Created strong design concepts and developed <br />
                                                design layouts for a variety of creative projects <br />
                                                using Photoshop and Illustrator, you can see more <br />
                                                at my portfolio.
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                <span className="text-danger" style={{ fontSize: '2rem' }}><b>- </b></span> Design is not just what it looks like and feels like.
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                <span className="text-danger" style={{ fontSize: '2rem' }}><b>- </b></span> The details are not the details. They make the design.
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                <span className="text-danger" style={{ fontSize: '2rem' }}><b>- </b></span> Good design doesn't date. Bad design does.
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                <span className="text-danger" style={{ fontSize: '2rem' }}><b>- </b></span> Everyday people are not very good designers.
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                <span className="text-danger" style={{ fontSize: '2rem' }}><b>- </b></span> I design for the woman who loves being a woman.
                                            </p>
                                            <button className="btn btn-danger px-4 py-1 mt-3 mb-2" style={{ fontSize: '0.8rem', marginLeft: '5rem' }}><b>View Portfolio</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="container-fluid" >
                        <div className="card mt-4  shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3"><img className="img-fluid" src={food1} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food4} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food3} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food4} alt="" /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3"><img className="img-fluid" src={food1} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food4} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food3} alt="" /></div>
                                    <div className="col-md-3"><img className="img-fluid"  src={food4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    );
};