import React from "react";
// import { Link } from 'react-router-dom';
import img2 from "./assets/man_1.jpg"
import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MessageIcon from '@mui/icons-material/Message';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';


export const Contact = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                <div className="row g-0">
                    <div className="col-md-6 " style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>
                    </div>

                    <div className="col-md-6" >
                        <div className="card" style={{ height: '450px' }}>

                            {/* <header className="card-title bg-warning text-center text-light pt-5" >
                                <h1 style={{ fontSize: "4rem" }}>short history</h1>
                            </header> */}

                            <div className="card-body" style={{ overflowY: 'auto' }}>
                                <p className="card-text px-5" style={{ fontSize: '1.5rem' }}>
                                    <IconButton aria-label="location">
                                        <LocationOnIcon />
                                    </IconButton>
                                    22/9 Vishnupuri colony, Kanpur, Uttar Pradesh.
                                </p>
                                <p className="card-text px-5" style={{ fontSize: '1.5rem' }}>
                                    <IconButton aria-label="mailicon">
                                        < MailIcon />
                                    </IconButton>
                                    udit012435@gmail.com
                                </p>
                                <p className="card-text px-5" style={{ fontSize: '1.5rem' }}>
                                    <IconButton aria-label="call">
                                        <CallIcon />
                                    </IconButton>
                                    +91 8810878157
                                </p>
                                <form className="card-text px-5">
                                    <input className="p-2" type="text" placeholder=" *YOUR NAME" style= {{width: '400px', height: '60px'}}/>
                                    <input className="p-2 mt-3" type="text" placeholder=" *YOUR EMAIL" style= {{width: '400px', height: '60px'}}/>
                                    <input className="p-2 mt-3" type="text" placeholder=" * YOUR INTERESET IN" style= {{width: '400px', height: '60px'}}/>
                                    <input className="p-2 mt-3" type="text" placeholder=" * YOUR MESSAGE" style= {{width: '400px', height: '100px'}}/>
                                </form>
                                <button className="btn btn-danger px-4 py-1 mt-3" style={{ fontSize: '0.8rem', marginLeft: '3rem' }}><b>Submit</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};