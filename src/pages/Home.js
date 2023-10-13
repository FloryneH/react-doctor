import React from 'react';
import Banner from '../composants/banner';
import CardHome from '../composants/cardHome';
import CounterStat from '../composants/counterStat';
import SubDescription from '../composants/subDescription';
import ServiceItem from '../composants/serviceItem';
import Form from '../composants/form';

import about1 from '../assets/images/about/img-1.jpg';
import about2 from '../assets/images/about/img-2.jpg';
import about3 from '../assets/images/about/img-3.jpg';

function Home() {

    const propsCardHome = [
        {
            icon: 'icofont-surgeon-alt',
            subtitle: '24 Hours Service',
            title: 'Online Appoinment',
            content: 'Get ALl time support for emergency.We have introduced the principle of family medicine.',
            button: {
                href: 'appoinment.html',
                class: 'btn btn-main btn-round-full',
                content: 'Make Appoinment'
            }
        },
        {
            icon: 'icofont-ui-clock',
            subtitle: 'Timing schedule',
            title: 'Working Hours',
            list : [
                {
                    day: 'Sun - Wed : ',
                    hours: '8:00 - 17:00'
                },
                {
                    day: 'Thu - Fri : ',
                    hours: '9:00 - 17:00'
                },
                {
                    day: 'Sat - sun : ',
                    hours: '10:00 - 17:00'
                },
            ],
        },
        {
            icon: 'icofont-support',
            subtitle: 'Emegency Cases',
            title: '1-800-700-6200',
            content: 'Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .',
        }
    ]

    const propsCounterStat = [
        {
            icon: 'icofont-doctor',
            number: 58,
            title: 'Happy People',
        },
        {
            icon: 'icofont-flag',
            number: 700,
            title: 'Surgery Comepleted',
        },
        {
            icon: 'icofont-badge',
            number: 40,
            title: 'Expert Doctors',
        },
        {
            icon: 'icofont-globe',
            number: 20,
            title: 'Worldwide Branch',
        }
    ]

    const propsSubDescription1 = {
        title: 'Award winning patient care',
        content: 'Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.',
    }

    const propsServiceItem = [
        {
            icon: 'icofont-laboratory text-lg',
            title: 'Laboratory services',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: 'icofont-heart-beat-alt text-lg',
            title: 'Heart Disease',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: 'icofont-tooth text-lg',
            title: 'Dental Care',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: 'icofont-crutch text-lg',
            title: 'Body Surgery',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: 'icofont-brain-alt text-lg',
            title: 'Neurology Sargery',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        },
        {
            icon: 'icofont-dna-alt-1 text-lg',
            title: 'Gynecology',
            content: 'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
        }
    ]

    const propsForm = {
        title: 'Book an Appoinment',
        content: 'Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.',
        optionFormControlSelect1: [
            'Choose Department',
            'Software Design',
            'Development cycle',
            'Software Development',
            'Maintenance',
            'Process Query',
            'Cost and Duration',
            'Modal Delivery'
        ],
        optionFormControlSelect2: [
            'Select Doctors',
            'Software Design',
            'Development cycle',
            'Software Development',
            'Maintenance',
            'Process Query',
            'Cost and Duration',
            'Modal Delivery'
        ],
        inputs: [
            {
                name: 'date',
                id: 'date',
                type: 'text',
                placeholder: 'dd/mm/yyyy'
            },
            {
                name: 'time',
                id: 'time',
                type: 'text',
                placeholder: 'Time'
            },
            {
                name: 'name',
                id: 'name',
                type: 'text',
                placeholder: 'Full Name'
            },
            {
                name: 'phone',
                id: 'phone',
                type: 'Number',
                placeholder: 'Phone Number'
            },
        ]
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <Banner
                subtitle='Total Health care solution'
                title='Your most trusted health partner'
                content='A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.'
                buttonContent='Make Appoinment'
            />

            <section class="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="feature-block d-lg-flex">
                                <CardHome
                                    propsCardHome={propsCardHome}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-sm-6">
                            <div class="about-img">
                                <img src={about1} alt="" class="img-fluid"/>
                                <img src={about2} alt="" class="img-fluid mt-4"/>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="about-img mt-4 mt-lg-0">
                                <img src={about3} alt="" class="img-fluid"/>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="about-content pl-4 mt-4 mt-lg-0">
                                <h2 class="title-color">Personal care <br/>& healthy living</h2>
                                <p class="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>

                                <a href="service.html" class="btn btn-main-2 btn-round-full btn-icon">Services<i class="icofont-simple-right ml-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-section ">
                <div class="container">
                    <div class="cta position-relative">
                        <div class="row">
                            <CounterStat
                                propsCounterStat={propsCounterStat}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section class="section service gray-bg">
                <div class="container">
                    <SubDescription
                        propsSubDescription={propsSubDescription1}
                    />
                    <div class="row">
                        <ServiceItem
                            propsServiceItem={propsServiceItem}
                        />
                    </div>
                </div>
            </section>

            <section class="section appoinment">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 ">
                            <div class="appoinment-content">
                                <img src={about3} alt="" class="img-fluid"/>
                                <div class="emergency">
                                    <h2 class="text-lg"><i class="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10 ">
                            <div class="appoinment-wrap mt-5 mt-lg-0">
                                <Form
                                    propsForm={propsForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;