import React from 'react';
import sign from '../assets/images/about/sign.png';

function Description({ title, content }) {
    return (
        <section className="section about-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color">{title}</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>{content}</p>
                        <img src={sign} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;