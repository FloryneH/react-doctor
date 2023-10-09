import React from 'react';

function FeaturesCard({ propsFeaturesCard, features }) {
    
    return (
        <div className={propsFeaturesCard.rowClass}>
            {features.map((feature, index) => {
                return (
                    <div className={propsFeaturesCard.colClass}>
                        <div className={propsFeaturesCard.blockClass}>
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