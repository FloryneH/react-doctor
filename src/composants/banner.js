import React from 'react';

function Banner({subtitle, title, content, buttonContent}) {
    return (
        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-xl-7">
                        <div class="block">
                            <div class="divider mb-3"></div>
                            <span class="text-uppercase text-sm letter-spacing ">{subtitle}</span>
                            <h1 class="mb-3 mt-3">{title}</h1>
                            
                            <p class="mb-4 pr-5">{content}</p>
                            <div class="btn-container ">
                                <a href="appoinment.html" target="_blank" class="btn btn-main-2 btn-icon btn-round-full">{buttonContent}<i class="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;