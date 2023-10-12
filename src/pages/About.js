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

import yang from '../assets/images/team/yang.jpg';
import grey from '../assets/images/team/grey.jpg';
import sheperd from '../assets/images/team/sheperd.jpg';
import sloan from '../assets/images/team/sloan.jpg';

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

    const propsPageTitle = {
        subtitle:'About Us',
        title:'About Us',
    }

    const propsDescription = {
        title:'Personal care for your healthy living',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.'
    }

    const propsFeaturesCard = {
        colClass:"col-lg-3 col-md-6",
        blockClass:"about-block-item mb-5 mb-lg-0",
    }

    const propsTeam = {
        title:'Meet Our Specialist',
        content:'Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles',
        team : [
            {
                name: 'Cristina Yang',
                img: yang,
                position: 'Cardiology'
            },
            {
                name: 'Meredith Grey',
                img: grey,
                position: 'General Surgery'
            },
            {
                name: 'Derek Shepherd',
                img: sheperd,
                position: 'Neurosurgery'
            },
            {
                name: 'Mark Sloan',
                img: sloan,
                position: 'Plastic Surgery'
            },
        ]
    }

    const propsRs = [
    ]

    const testimonial = [
        {
            title: 'Amazing service !',
            author: 'John Partho',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Expert doctors !',
            author: 'Mullar Sarth',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Good Support !',
            author: 'Kolis Mullar',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Nice Environment !',
            author: 'Partho Sarothi',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Modern Service !',
            author: 'Kolis Mullar',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        }
    ];

    const propsTestimonial = {
        title:'What they say about us',
        carrousel:true,
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle 
                propsPageTitle={propsPageTitle}
            />

            <Description
                propsDescription={propsDescription}
            />
            
            <section className="fetaure-page ">
                <div className="container">
                    <div class="row">
                                <FeaturesCard 
                                    features={featuresAbout}
                                    propsFeaturesCard={propsFeaturesCard}
                                    propsRs={propsRs}
                                ></FeaturesCard>
                    </div>
                </div>
            </section>

            <Awards
                title='Our Doctors achievements '
            />

            <Team
                propsTeam={propsTeam}
            />

            <Testimonial
                testimonial={testimonial}
                propsTestimonial={propsTestimonial}
            />
        </main>
    );
}

export default About;