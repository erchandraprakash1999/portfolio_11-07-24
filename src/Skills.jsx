import React from "react";
// import { Link } from 'react-router-dom';
import img2 from "./assets/man_2.jpg"
// import img1 from "./assets/man.jpg"
export const Skills = () => {
    return (
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
                                <button className="btn btn-danger mx-5 px-4 py-1 mt-3">View Skills </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};