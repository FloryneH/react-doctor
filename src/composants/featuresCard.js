import React from 'react';
import Rs from './rs';

function FeaturesCard({ propsFeaturesCard, features, propsRs }) {
    
    return (
        <>
            {features.map((feature, index) => {
                return (
                    <div class={propsFeaturesCard.colClass}>
                        <div class={propsFeaturesCard.blockClass}>
                            <img src={feature.icon} alt="" className="img-fluid w-100"/>
                            <h4 className="mt-4 mb-2 title-color">{feature.title}</h4>
                            <p className="mb-4">{feature.content}</p>

                            {propsFeaturesCard.lien ? (
                                <a href="department-single.html" className='read-more'>
                                    {propsFeaturesCard.lien}<i className="icofont-simple-right ml-2"></i>
                                </a>
                            ) : null}
                            
                            <Rs propsRs={propsRs} />
                        </div>
                    </div>
                    
                );
                })}       
        </>             
    );
}

export default FeaturesCard;