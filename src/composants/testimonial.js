import React, { useEffect } from 'react';
import Slider from 'react-slick';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';


function PageTitle() {
    const testimonial = [
        {
            title: 'Amazing service !',
            author: 'John Partho',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Expert doctors !',
            author: 'Mullar Sarth',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Good Support !',
            author: 'Kolis Mullar',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Nice Environment !',
            author: 'Partho Sarothi',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        },
        {
            title: 'Modern Service !',
            author: 'Kolis Mullar',
            content: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat. Quibusdam laboriosam eveniet nostrum nemo commodi numquam quod.'
        }
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section class="section testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-6">
                        <div class="section-title">
                            <h2 class="mb-4">What they say about us</h2>
                            <div class="divider  my-4"></div>
                        </div>
                    </div>
                </div>
                
                    <div class="row align-items-center">
                        <div class="col-lg-6 testimonial-wrap offset-lg-6">
                        <Slider {...settings}>
                            {testimonial.map((item, index) => {
                                return (
                                    <div class="testimonial-block">
                                        <div class="client-info ">
                                            <h4>{item.title}</h4>
                                            <span>{item.author}</span>
                                        </div>
                                        <p>
                                            {item.content}
                                        </p>
                                        <i class="icofont-quote-right"></i>
                                        
                                    </div>
                                );
                            })}
                        </Slider>
                        </div>
                    </div>
                
            </div>
        </section>
    );
}

export default PageTitle;