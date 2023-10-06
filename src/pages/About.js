import React from 'react';
import PageTitle from '../composants/pageTitle';
import Description from '../composants/descriptionAbout';
import FetaurePage from '../composants/fetaurePage';
import Awards from '../composants/awards';
import Team from '../composants/team';
import Testimonial from '../composants/testimonial';

function About() {
    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle {...{ subtitle: 'About Us', title: 'About Us' }}/>
            <Description {...{ title: 'Personal care for your healthy living', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.' }} />
            <FetaurePage />
            <Awards {...{ title: 'Our Doctors achievements ' }} />
            <Team {...{ title: 'Meet Our Specialist', content: 'Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles'}} />
            <Testimonial  {...{ title: 'What they say about us' }} />
        </main>
    );
}

export default About;