import React from 'react';
import PageTitle from '../../composants/pageTitle';
import SubDescription from '../../composants/subDescription';
import FeaturesCard from '../../composants/featuresCard';

import service1 from '../../assets/images/services/service-1.jpg';
import service2 from '../../assets/images/services/service-2.jpg';
import service3 from '../../assets/images/services/service-3.jpg';
import service4 from '../../assets/images/services/service-4.jpg';
import service6 from '../../assets/images/services/service-6.jpg';
import service8 from '../../assets/images/services/service-8.jpg';

function Departments() {

    const featuresDepartments = [
        {
            icon: service1,
            title: 'Opthomology',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service2,
            title: 'Cardiology',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service3,
            title: 'Dental Care',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service4,
            title: 'Child Care',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service6,
            title: 'Pulmology',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: service8,
            title: "Gynecology",
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
    ]

    const propsPageTitle = {
        subtitle: 'All Department',
        title: 'Care Department'
    }

    const propsSubDescription = {
        title: 'Award winning patient care',
        content: 'Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.'
    }

    const propsFeaturesCard = {
        lien:'Learn More'
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle
                propsPageTitle={propsPageTitle}
            />
            <section className="section service-2">
                <div className="container">
                    <SubDescription
                        propsSubDescription={propsSubDescription}
                    />
                    <FeaturesCard
                        propsFeaturesCard={propsFeaturesCard}
                        features={featuresDepartments}
                    />
                </div>
            </section>
        </main>
    );
}

export default Departments;