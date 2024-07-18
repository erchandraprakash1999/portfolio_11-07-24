import React from "react";
import img4 from "./assets/man_4.jpg"
export const Employment = () => {
    return (
        <div className="container-fluid" >
            <div className="card mb-3 shadow mt-4" style={{ maxWidth: "100%", }}>
                <div className="row g-0">
                    <div className="col-md-4 img-fluid" style={{ backgroundImage: `url(${img4})`, backgroundSize: 'contain', backgroundPosition: 'right', color: 'white', height: "447px", backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>

                    </div>

                    <div className="col-md-8" >
                        <div className="card" style={{ height: '450px' }}>


                            <div className="card-body p-5" style={{ overflowY: 'auto' }}> {/* Make the content scrollable */}
                               
                                <p className="card-text" style={{ fontSize: '18px' }}>

                                <span className="bg-danger text-light px-3 py-1" style={{ fontSize: '0.8rem' }}>2016-2013</span><span className="mx-3"><b> Panara Media - Art Director</b></span><br />
                                </p>
                                <p className="card-text text-secondary" style={{ marginLeft: '7rem' }}>
                                Execute all visual design stages from<br />
                                concept to final hand-off to engineering.<br />
                                   
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>

                                <span className="bg-danger text-light px-3 py-1" style={{ fontSize: '0.8rem' }}>2016-2013</span><span className="mx-3"><b> LinkSture Web - Project Manager</b></span> <br />

                                </p>
                                <p className="card-text text-secondary" style={{ marginLeft: '7rem' }}>
                                    Led UX design on many mobile <br />
                                    applications that redefined the market<br />
                                    landscape.
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>

                                <span className="bg-danger text-light px-3 py-1" style={{ fontSize: '0.8rem' }}>2016-2013</span><span className="mx-3"><b> Matrix Media - Visual / UI Designer</b></span> <br />

                                </p>
                                <p className="card-text text-secondary" style={{ marginLeft: '7rem' }}>
                                    Established UX design as the first<br />
                                     stage of Web and mobile app <br />
                                     developments.
                                </p>
                                <p className="card-text" style={{ fontSize: '18px' }}>

                                <span className="bg-danger text-light px-3 py-1"style={{ fontSize: '0.8rem' }} >2016-2013</span><span className=" mx-3"><b> Creatika Agency - Graphic Designer</b></span> <br />

                                </p>
                                <p className="card-text text-secondary" style={{ marginLeft: '7rem' }}>
                                    Researched, strategized and launched<br />
                                    best UX improvements for nonprofit <br />
                                    sites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};