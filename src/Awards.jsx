import React from "react";
import img5 from "./assets/man_5.jpg"
import img6 from "./assets/award-logo-1.jpg"
import img7 from "./assets/award-logo-2.jpg"
import img8 from "./assets/award-logo-3.jpg"
import img9 from "./assets/award-logo-4.jpg"
import img10 from "./assets/award_img.jpg"
import img11 from "./assets/blog_1.jpg"
import img12 from "./assets/blog_2.jpg"
import img13 from "./assets/blog_3.jpg"
import img14 from "./assets/blog_4.jpg"

export const Awards = () => {
    return (

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="container-fluid" >
                        <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                            <div className="row g-0">
                                <div className="col-md-6 img-fluid " style={{ backgroundImage: `url(${img10})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>

                                </div>

                                <div className="col-md-6" >
                                    <div className="card" style={{ height: '450px' }}>


                                        <div className="card-body" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                                            <p className="card-text" style={{ marginLeft: '5rem', fontSize: '3rem' }}>
                                                <b>I'm not aiming</b><br />
                                                <b>for an Award.</b>
                                            </p>
                                            <p className="card-text text-secondary" style={{ fontSize: '1.2rem', marginLeft: '5rem' }}>
                                                Whenever you want to achieve something, keep<br />
                                                your eyes open, concentrate and make sure you<br />
                                                know exactly what it is you want. No one can hit<br />
                                                their target with their eyes closed. To accomplish<br />
                                                great things we must not only act, but also dream,<br />
                                                not only plan, but also believe.
                                            </p>
                                            <div className="container-fluid">
                                                <div className="row mx-5 mt-5">
                                                    <div className="col-md-6 pt-4"><img className="img-fluid" src={img6} alt="" /></div>
                                                    <div className="col-md-6 pt-4"><img className="img-fluid" src={img7} alt="" /></div>
                                                </div>
                                                <div className="row mx-5 mt-5 mb-3">
                                                    <div className="col-md-6 pt-4"><img className="img-fluid" src={img8} alt="" /></div>
                                                    <div className="col-md-6 pt-4"><img className="img-fluid" src={img9} alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="container-fluid">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3"><img className="img-fluid" style={{height:'208px'}} src={img11} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img12} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img13} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img14} alt="" /></div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-3"><img className="img-fluid" style={{height:'208px'}} src={img11} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img12} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img13} alt="" /></div>
                                    <div className="col-3"><img className="img-fluid" src={img14} alt="" /></div>
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
