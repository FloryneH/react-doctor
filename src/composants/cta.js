import React from 'react';

function Cta({ propsCta }) {
    return (
        <section class="section cta-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="cta-content">
                            <div class="divider mb-4"></div>
                            <h2 class="mb-5 text-lg">{propsCta.title}<span class="title-color">{propsCta.colorfulTitle}</span></h2>
                            <a href="appoinment.html" class="btn btn-main-2 btn-round-full">{propsCta.buttonContent}<i class="icofont-simple-right  ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;