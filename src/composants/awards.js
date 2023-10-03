import React from 'react';

import award1 from '../assets/images/about/1.png';
import award2 from '../assets/images/about/2.png';
import award3 from '../assets/images/about/3.png';
import award4 from '../assets/images/about/4.png';
import award5 from '../assets/images/about/5.png';
import award6 from '../assets/images/about/6.png';

function Awards() {
    return (
        <section class="section awards">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <h2 class="title-color">Our Doctors achievements </h2>
                        <div class="divider mt-4 mb-5 mb-lg-0"></div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award3} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award4} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award1} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award2} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award5} alt="" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="award-img">
                                    <img src={award6} alt="" class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Awards;