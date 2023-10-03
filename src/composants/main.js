import React from 'react';
import Header from './header';
import Navbar from './navbar';
import PageTitle from './pageTitle';
import FetaurePage from './fetaurePage';
import Awards from './awards';
import Team from './team';
import Testimonial from './testimonial';
import Footer from './footer';

import sign from '../assets/images/about/sign.png';

function MainContent() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <PageTitle />

        <section class="section about-page">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <h2 class="title-color">Personal care for your healthy living</h2>
              </div>
              <div class="col-lg-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
                <img src={sign} alt="" class="img-fluid"/>
              </div>
            </div>
          </div>
        </section>

        <FetaurePage />
        <Awards />
        <Team />
        <Testimonial />

        <Footer />
      </main>
      
    </div>
  );
}

export default MainContent;
