import React from 'react';

function Banner({subtitle, title, content, buttonContent}) {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xl-7">
                        <div className="block">
                            <div className="divider mb-3"></div>
                            <span className="text-uppercase text-sm letter-spacing ">{subtitle}</span>
                            <h1 className="mb-3 mt-3">{title}</h1>
                            
                            <p className="mb-4 pr-5">{content}</p>
                            <div className="btn-container ">
                                <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">{buttonContent}<i className="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;