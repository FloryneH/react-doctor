import React from 'react';

function Cta({ propsCta }) {
    return (
        <section className="section cta-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="cta-content">
                            <div className="divider mb-4"></div>
                            <h2 className="mb-5 text-lg">{propsCta.title}<span className="title-color">{propsCta.colorfulTitle}</span></h2>
                            <a href="appoinment.html" className="btn btn-main-2 btn-round-full">{propsCta.buttonContent}<i className="icofont-simple-right  ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;