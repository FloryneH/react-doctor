import React from 'react';
import about1 from '../assets/images/about/about-1.jpg';
import about2 from '../assets/images/about/about-2.jpg';
import about3 from '../assets/images/about/about-3.jpg';
import about4 from '../assets/images/about/about-4.jpg';

function FetaurePage() {
  return (
    <section class="fetaure-page ">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="about-block-item mb-5 mb-lg-0">
                        <img src={about1} alt="" class="img-fluid w-100"/>
                        <h4 class="mt-3">Healthcare for Kids</h4>
                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="about-block-item mb-5 mb-lg-0">
                        <img src={about2} alt="" class="img-fluid w-100"/>
                        <h4 class="mt-3">Medical Counseling</h4>
                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="about-block-item mb-5 mb-lg-0">
                        <img src={about3} alt="" class="img-fluid w-100"/>
                        <h4 class="mt-3">Modern Equipments</h4>
                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="about-block-item">
                        <img src={about4} alt="" class="img-fluid w-100"/>
                        <h4 class="mt-3">Qualified Doctors</h4>
                        <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FetaurePage;