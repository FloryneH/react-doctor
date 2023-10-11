import React from 'react';

function FeaturesCard({ propsFeaturesCard, features }) {
    
    return (
        <div className="row mt-5">
            {features.map((feature, index) => {
                return (
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="service-block mb-5">
                            <img src={feature.icon} alt="" className="img-fluid w-100"/>
                            <h4 className="mt-4 mb-2 title-color">{feature.title}</h4>
                            <p className="mb-4">{feature.content}</p>
                            {propsFeaturesCard.lien ? (
                                <a href="department-single.html" className='read-more'>
                                    {propsFeaturesCard.lien}<i className="icofont-simple-right ml-2"></i>
                                </a>
                            ) : null}
                        </div>
                    </div>
                );
                })}                    
        </div>
    );
}

export default FeaturesCard;