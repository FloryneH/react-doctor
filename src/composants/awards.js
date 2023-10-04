import React from 'react';

import award1 from '../assets/images/about/1.png';
import award2 from '../assets/images/about/2.png';
import award3 from '../assets/images/about/3.png';
import award4 from '../assets/images/about/4.png';
import award5 from '../assets/images/about/5.png';
import award6 from '../assets/images/about/6.png';

function Awards({ title }) {
    const awards = [
        {
            icon: award1,
        },
        {
            icon: award2,
        },
        {
            icon: award3,
        },
        {
            icon: award4,
        },
        {
            icon: award5,
        },
        {
            icon: award6,
        },
    ]
    return (
        <section className="section awards">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h2 className="title-color">{title}</h2>
                        <div className="divider mt-4 mb-5 mb-lg-0"></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {awards.map((award, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="award-img">
                                            <img src={award.icon} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;