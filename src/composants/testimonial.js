import React from 'react';
import Slider from 'react-slick';
import '../plugins/slick-carousel/slick/slick.css';
import '../plugins/slick-carousel/slick/slick-theme.css';


function PageTitle({title}) {
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
        <section className="section testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="section-title">
                            <h2 className="mb-4">{title}</h2>
                            <div className="divider  my-4"></div>
                        </div>
                    </div>
                </div>
                
                    <div className="row align-items-center">
                        <div className="col-lg-6 testimonial-wrap offset-lg-6">
                        <Slider {...settings}>
                            {testimonial.map((item, index) => {
                                return (
                                    <div className="testimonial-block">
                                        <div className="client-info ">
                                            <h4>{item.title}</h4>
                                            <span>{item.author}</span>
                                        </div>
                                        <p>
                                            {item.content}
                                        </p>
                                        <i className="icofont-quote-right"></i>
                                        
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