import React from 'react';

function PageTitle({ subtitle, title }) {
    return (
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block text-center">
                            <span class="text-white">{subtitle}</span>
                            <h1  class="text-capitalize mb-5 text-lg">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;