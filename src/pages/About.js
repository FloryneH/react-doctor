import React from 'react';
import PageTitle from '../composants/pageTitle';
import Description from '../composants/descriptionAbout';
import FeaturesCard from '../composants/featuresCard';
import Awards from '../composants/awards';
import Team from '../composants/team';
import Testimonial from '../composants/testimonial';

import about1 from '../assets/images/about/about-1.jpg';
import about2 from '../assets/images/about/about-2.jpg';
import about3 from '../assets/images/about/about-3.jpg';
import about4 from '../assets/images/about/about-4.jpg';

function About() {

    const featuresAbout = [
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
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle 
                subtitle='About Us'
                title='About Us'
            />

            <Description
                title='Personal care for your healthy living'
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.'
            />
            
            <section className="fetaure-page ">
                <div className="container">
                    <FeaturesCard 
                        rowClass="row"
                        features={featuresAbout}
                        colClass="col-lg-3 col-md-6"
                        blockClass="about-block-item mb-5 mb-lg-0"
                        aDisplay="d-none"
                    />
                </div>
            </section>

            <Awards
                title='Our Doctors achievements '
            />

            <Team
                title='Meet Our Specialist'
                content='Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles'
            />

            <Testimonial
                title='What they say about us'
            />
        </main>
    );
}

export default About;