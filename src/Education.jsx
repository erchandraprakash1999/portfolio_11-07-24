import React from "react";
// import { Link } from 'react-router-dom';
import img3 from "./assets/man_3.jpg"
import { red } from "@mui/material/colors";
// import img1 from "./assets/man.jpg"
export const Education = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                <div className="row g-0">
                    <div className="col-md-6 img-fluid" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>
                      
                    </div>

                    <div className="col-md-6" >
                        <div className="card" style={{ height: '450px' }}>


                            <div className="card-body" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                                <p className="card-text px-5 text-secondary" style={{ fontSize: '1.2rem' }}>
                                    Education is not learning of facts, but the training of the mind to think. Education is a gift That none can take away. I'm still learning everyday.
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>
                                    
                                    <span  style={{ fontSize: '3rem', color:'red' }}>01. </span><b>INDUS Institute of Technology and Management</b> <br />
                                  
                                </p>
                                <p className="card-text" style={{marginLeft:'5rem' }}>
                                    Bachelors of Technology<br/>
                                    Computer Science Branch <br />
                                    2021-2024
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>
                                    
                                    <span  style={{ fontSize: '3rem', color:'red' }}>02. </span><b>Goverment Polytechnic Kanpur,Up</b> <br />
                                  
                                </p>
                                <p className="card-text" style={{marginLeft:'5rem' }}>
                                    Deploma in Technology<br/>
                                    Instrumentation and Controll Engg. Branch <br />
                                    2018-2021
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>
                                    
                                    <span  style={{ fontSize: '3rem', color:'red' }}>03. </span><b>D.A.V. Inter College</b> <br />
                                  
                                </p>
                                <p className="card-text" style={{marginLeft:'5rem' }}>
                                    Inter (12th)<br/>
                                    2017-2018
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>
                                    
                                    <span  style={{ fontSize: '3rem', color:'red' }}>04. </span><b>P.M.G. Inter College</b> <br />
                                  
                                </p>
                                <p className="card-text" style={{marginLeft:'5rem' }}>
                                    Class 10th<br/>
                                    2011-2012
                                </p>
                                {/* <p className="card-text text-danger mx-5" style={{ fontSize: '1.5rem' }}>We're Creative Minds</p> */}
                                <button className="btn btn-danger px-4 py-1 mt-3" style={{marginLeft:'5rem' }}>View Resume </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};