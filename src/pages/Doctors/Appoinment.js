import React from 'react';
import PageTitle from '../../composants/pageTitle';
import Form from '../../composants/form';

function DoctorsSingle() {

    const propsPageTitle = {
        subtitle: 'Book your Seat',
        title: 'Appoinment'
    }

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
            }
        ],
        btn : false
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle
                propsPageTitle={propsPageTitle}
            />

            <section class="appoinment section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="mt-3">
                                <div class="feature-icon mb-3">
                                    <i class="icofont-support text-lg"></i>
                                </div>
                                <span class="h3">Call for an Emergency Service!</span>
                                <h2 class="text-color mt-3">+84 789 1256 </h2>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
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

export default DoctorsSingle;