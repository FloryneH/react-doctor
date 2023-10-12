import React from 'react';
import PageTitle from '../../composants/pageTitle';
import FeaturesCard from '../../composants/featuresCard';
import Paragraph from '../../composants/paragraphe';
import Qualifications from '../../composants/qualifications';
import Liste from '../../composants/liste';
import SidebarWidget from '../../composants/sidebarWidget';

import yang from '../../assets/images/team/yang.jpg';

function DoctorsSingle() {

    const propsPageTitle = {
        subtitle: 'Doctor Details',
        title: 'Alexandar james'
    }

    const propsFeaturesCard = {
        colClass: 'col-lg-4 col-md-6',
        blockClass: 'doctor-img-block',
    }

    const features = [
        {
            icon: yang,
            title: 'Cardiology',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque',
        }
    ]

    const propsRs = [
        "icofont-facebook",
        "icofont-twitter",
        "icofont-skype",
        "icofont-linkedin",
        "icofont-pinterest"
    ]

    const propsParagraphe1 = {
        title: 'Introducing to myself',
        subContent:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi?',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?',
        h2: true,
        btn: true,
        classTitle: 'text-md',
        divClass: 'divider my-4'
    }

    const propsParagraphe2 = {
        title: 'My skills',
        subContent:'',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?',
        classTitle: '',
        divClass: 'divider my-4'
    }

    const propsQualifications = [
        {
            year: 'Year(2005-2007)',
            title: 'MBBS, M.D at University of Wyoming',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!'
        },
        {
            year: 'Year(2007-2009)',
            title: 'M.D. of Netherland Medical College',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!'
        },
        {
            year: 'Year(2009-2010)',
            title: 'MBBS, M.D at University of Japan',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!'
        },
        {
            year: 'Year(2010-2011)',
            title: 'M.D. of Canada Medical College',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!'
        },
    ]

    const propsListe = {
        title:'Expertise area',
        items: [
            'International Drug Database',
            'Stretchers and Stretcher Accessories',
            'Cushions and Mattresses',
            'Cholesterol and lipid tests',
            'Critical Care Medicine Specialists',
            'Emergency Assistance',
        ],
        divClass: 'skill-list',
    }
        
    const propsSidebarWidget = {
        title:'Make Appoinment',
        horraires:[
            {
                days:'Monday - Friday',
                hours:'9:00 - 17:00',
            },
            {
                days:'Saturday',
                hours:'9:00 - 16:00',
            },
            {
                days:'Sunday',
                hours:'Closed',
            }
        ],
        infos:{
            message :'Need Urgent Help?',
            number:'+23-4565-65768'
        },
        ulClass:'list-unstyled lh-35',
        h3Class:'text-color-2'
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle
                propsPageTitle={propsPageTitle}
            />
            <section className="section doctor-single">
                <div className="container">
                    <div className="row">
                        <FeaturesCard 
                            features={features}
                            propsFeaturesCard={propsFeaturesCard}
                            propsRs={propsRs}
                        />
                        <div class="col-lg-8 col-md-6">
                            <div class="doctor-details mt-4 mt-lg-0">
                                <Paragraph
                                    propsParagraphe={propsParagraphe1}
                                />
                            </div>
                        </div>    
                    </div>
                </div>
            </section>

            <section class="section doctor-qualification gray-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h3>My Educational Qualifications</h3>
                                <div class="divider my-4"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <Qualifications
                            propsQualifications={propsQualifications}
                        />
                    </div>  
                </div>
            </section>

            <section class="section doctor-skills">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <Paragraph
                                propsParagraphe={propsParagraphe2}
                            />
                        </div>
                        <div class="col-lg-4">
                            <Liste
                                propsListe={propsListe}
                            />
                        </div>   
                        <div class="col-lg-4">
                            <div class="sidebar-widget  gray-bg p-4">
                                <SidebarWidget
                                    propsSidebarWidget={propsSidebarWidget}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>    
    );
}

export default DoctorsSingle;