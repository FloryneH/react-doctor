import React from 'react';
import about1 from '../assets/images/about/about-1.jpg';
import about2 from '../assets/images/about/about-2.jpg';
import about3 from '../assets/images/about/about-3.jpg';
import about4 from '../assets/images/about/about-4.jpg';

function FetaurePage() {
    const features = [
        {
            icon: about1,
            title: 'Healthcare for Kids',
            content: 'Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .',
        },
        {
            icon: about2,
            title: 'Medical Counseling',
            content: 'Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .',
        },
        {
            icon: about3,
            title: 'Modern Equipments',
            content: 'Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .',
        },
        {
            icon: about4,
            title: 'Best Doctors',
            content: 'Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .',
        }
    ]
    return (
        <section class="fetaure-page ">
            <div class="container">
                <div class="row">
                    {features.map((feature, index) => {
                        return (
                            <div class="col-lg-3 col-md-6">
                                <div class="about-block-item mb-5 mb-lg-0">
                                    <img src={feature.icon} alt="" class="img-fluid w-100"/>
                                    <h4 class="mt-3">{feature.title}</h4>
                                    <p>{feature.content}</p>
                                </div>
                            </div>
                        );
                        })}                    
                </div>
            </div>
        </section>
    );
}

export default FetaurePage;