import React from 'react';
import sign from '../assets/images/about/sign.png';

function Description({ propsDescription }) {
    return (
        <section className="section about-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color">{propsDescription.title}</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>{propsDescription.content}</p>
                        <img src={sign} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;