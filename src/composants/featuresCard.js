import React from 'react';

function FeaturesCard({features, colClass, blockClass, rowClass, aDisplay}) {
    
    return (
        <div className={rowClass}>
            {features.map((feature, index) => {
                return (
                    <div className={colClass}>
                        <div className={blockClass}>
                            <img src={feature.icon} alt="" className="img-fluid w-100"/>
                            <h4 className="mt-4 mb-2 title-color">{feature.title}</h4>
                            <p className="mb-4">{feature.content}</p>
                            <a href="department-single.html" class={aDisplay}>Learn More  <i class="icofont-simple-right ml-2"></i></a>
                        </div>
                    </div>
                );
                })}                    
        </div>
    );
}

export default FeaturesCard;