import React from 'react';
import PageTitle from '../composants/pageTitle';
import FeaturesCard from '../composants/featuresCard';
import Cta from '../composants/cta';

import service1 from '../assets/images/services/service-1.jpg';
import service2 from '../assets/images/services/service-2.jpg';
import service3 from '../assets/images/services/service-3.jpg';
import service4 from '../assets/images/services/service-4.jpg';
import service6 from '../assets/images/services/service-6.jpg';
import service8 from '../assets/images/services/service-8.jpg';

function Services() {

    const featuresServices = [
        {
            icon: service1,
            title: 'Child care',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service2,
            title: 'Personal Care',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service3,
            title: 'CT scan',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service4,
            title: 'Joint replacement',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service6,
            title: 'Examination & Diagnosis',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service8,
            title: "Alzheimer's disease",
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
    ]

    const propsPageTitle = {
        subtitle:'Our services',
        title:'What We Do',
    }

    const propsFeaturesCard = {
        rowClass:"row mt-5",
        colClass:"col-lg-4 col-md-6 col-sm-6",
        blockClass:"service-block mb-5",
        aDisplay:"d-none",
    }

    const propsCta = {
        title:'We are pleased to offer you the ',
        colorfulTitle:'chance to have the healthy',
        buttonContent:'Get Appoinement'
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle 
                propsPageTitle={propsPageTitle}
            />
            <section className="fetaure-page ">
                <div className="container">
                    <FeaturesCard 
                        features={featuresServices}
                        propsFeaturesCard={propsFeaturesCard}
                    />
                </div>
            </section>
            <Cta 
                propsCta={propsCta}
            />
        </main>
    );
}

export default Services;