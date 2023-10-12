import React from 'react';
import PageTitle from '../composants/pageTitle';
import CardContact from '../composants/cardContact';
import Paragraph from '../composants/paragraphe';
import Form from '../composants/form';

function Services() {

    const propsPageTitle = {
        subtitle:'Contact Us',
        title:'Get in Touch',
    }

    const propsCardContact = [
        {
            icon: 'icofont-live-support',
            title: 'Call Us',
            content: '+823-4565-13456',
        },
        {
            icon: 'icofont-support-faq',
            title: 'Email Us',
            content: 'contact@mail.com',
        },
        {
            icon: 'icofont-location-pin',
            title: 'Location',
            content: 'North Main Street,Brooklyn Australia',
        },
    ]

    const propsParagraphe = {
        title: 'Contact Us',
        h2: true,
        subContent: '',
        content: 'Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?',
        divClass: 'divider mx-auto my-4',
    }

    const propsForm = {
        title: '',
        content: '',
        inputs: [
            {
                name: 'name',
                id: 'name',
                type: 'text',
                placeholder: 'Your Full Name'
            },
            {
                name: 'email',
                id: 'email',
                type: 'email',
                placeholder: 'Your Email Address'
            },
            {
                name: 'subject',
                id: 'subject',
                type: 'text',
                placeholder: 'Your Query Topic'
            },
            {
                name: 'phone',
                id: 'phone',
                type: 'Number',
                placeholder: 'Your Phone Number'
            }
        ],
        btn: true
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle 
                propsPageTitle={propsPageTitle}
            />

            <section class="section contact-info pb-0">
                <div class="container">
                    <div class="row">
                        <CardContact    
                            propsCardContact={propsCardContact}
                        />
                    </div>
                </div>
            </section>

            <section class="contact-form-wrap section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center">
                                <Paragraph
                                    propsParagraphe={propsParagraphe}
                                />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <form id="contact-form" class="contact__form " method="post" action="mail.php">
                                <Form
                                    propsForm={propsForm}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Services;