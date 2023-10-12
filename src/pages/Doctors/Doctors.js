import React from 'react';
import PageTitle from '../../composants/pageTitle';
import SubDescription from '../../composants/subDescription';
import ShuffleFilter from '../../composants/shuffle';
import Cta from '../../composants/cta';

import yang from '../../assets/images/team/yang.jpg';
import grey from '../../assets/images/team/grey.jpg';
import hunt from '../../assets/images/team/hunt.jpg';
import shepherd from '../../assets/images/team/sheperd.jpg';
import webber from '../../assets/images/team/webber.jpg';
import bailey from '../../assets/images/team/bailey.jpg';
import karev from '../../assets/images/team/karev.jpg';
import robbins from '../../assets/images/team/robbins.jpg';
import Asheperd from '../../assets/images/team/Asheperd.jpg';
import torres from '../../assets/images/team/toress.jpg';
import sloan from '../../assets/images/team/sloan.jpg';

function Doctors() {

    const propsPageTitle = {
        subtitle: 'All Doctors',
        title: 'Specalized doctors'
    }

    const propsSubDescription = {
        title: 'Doctors',
        content: 'We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque'
    }
    
    const propsFilter = [
            {
                title: 'All Department',
                dataGroup: 'All Department',
            },
            {
                title: 'Cardiology',
                dataGroup: 'Cardiology',
            },
            {
                title: 'General',
                dataGroup: 'General',
            },
            {
                title: 'Trauma',
                dataGroup: 'Trauma',
            },
            {
                title: 'Neuro',
                dataGroup: 'Neuro',
            },
            {
                title: 'Pediatric',
                dataGroup: 'Pediatric',
            },  
            {
                title: 'Plastic',
                dataGroup: 'Plastic',
            },
            {
                title: 'Orthopedic',
                dataGroup: 'Orthopedic',
            },
        ]

    const propsShuffle = {
        doctors: [
            {
                name: 'Cristina Yang',
                image: yang,
                description: 'Cardiology',
                dataGroup: 'Cardiology'
            },
            {
                name: 'Meredith Grey',
                image: grey,
                description: 'General Surgery',
                dataGroup: 'General'
            },
            {
                name: 'Owen Hunt',
                image: hunt,
                description: 'Trauma Surgery',
                dataGroup: 'Trauma'
            },
            {
                name: 'Derek Shepherd',
                image: shepherd,
                description: 'Neurosurgery',
                dataGroup: 'Neuro'
            },
            {
                name: 'Richard Webber',
                image: webber,
                description: 'General Surgery',
                dataGroup: 'General'
            },
            {
                name: 'Miranda Bailey',
                image: bailey,
                description: 'General Surgery',
                dataGroup: 'General'
            },
            {
                name: 'Alex Karev',
                image: karev,
                description: 'Pediatric Surgery',
                dataGroup: 'Pediatric'
            },
            {
                name: 'Arizona Robbins',
                image: robbins,
                description: 'Pediatric Surgery',
                dataGroup: 'Pediatric'
            },
            {
                name: 'Amelia Shepherd',
                image: Asheperd,
                description: 'Neurosurgery',
                dataGroup: 'Neuro'
            },
            {
                name: 'Mark Sloan',
                image: sloan,
                description: 'Plastic Surgery',
                dataGroup: 'Plastic'
            },
            {
                name: 'Callie" Torres',
                image: torres,
                description: 'Orthopedic Surgery',
                dataGroup: 'Orthopedic'
            }
        ]
    }

    const propsCta = {
        title: 'We are pleased to offer you the ',
        colorfulTitle: 'chance to have the healthy',
        buttonContent: 'Get Appoinement'
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle
                propsPageTitle={propsPageTitle}
            />
            <section class="section doctors">
                <div class="container">
                    <SubDescription
                        propsSubDescription={propsSubDescription}
                    />
                    <ShuffleFilter
                        propsFilter={propsFilter}
                        propsShuffle={propsShuffle}
                    />
                </div>
            </section>
            <Cta
                propsCta={propsCta}
            />
        </main>
    );
}

export default Doctors;