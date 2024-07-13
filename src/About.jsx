import React from "react";
// import { Link } from 'react-router-dom';
import img1 from "./assets/man.jpg"
// import img1 from "./assets/man.jpg"
export const About = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                <div className="row g-0">
                    <div className="col-md-6" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: "447px" }}>
                        <div className="card-body text-end">
                            <h2 className="card-title m-3 mb-5" >about me</h2>
                            <p className="m-3">Name : Udit Narayan</p>
                            <p className="m-3">Email : udit012435@gmail.com</p>
                            <p className="m-3">Phone : 8888888888</p>
                            <p className="m-3">Fax : 9999999999</p>
                            <p className="m-3">DOB : 01-01-1997</p>
                            <p className="m-3">Nationality : Indian</p>
                        </div>
                    </div>

                    <div className="col-md-6" >
                        <div className="card" style={{ height: '450px' }}>

                            <header className="card-title bg-warning text-center text-light pt-5" >
                                <h1 style={{ fontSize: "4rem" }}>short history</h1>
                            </header>

                            <div className="card-body" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                                <p className="card-text px-5" style={{ fontSize: '1.5rem' }}>
                                    <b>Hello! </b> I'm a Web Developer from Kanpur, Uttar Pradesh. I hold a Bachelor's Degree in Computer Science.
                                </p>
                                <p className="card-text px-5 text-secondary" style={{ fontSize: '1.2rem' }}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ratione in! Cupiditate aspernatur pariatur placeat, inventore eum, ducimus ipsum aliquam accusantium aut porro rerum tenetur nobis voluptatem aliquid suscipit quos!
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ratione in! Cupiditate aspernatur pariatur placeat, inventore eum, ducimus ipsum aliquam accusantium aut porro rerum tenetur nobis voluptatem aliquid suscipit quos!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};