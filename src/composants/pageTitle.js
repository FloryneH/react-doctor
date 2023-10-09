import React, { useState } from 'react';

function PageTitle( { propsPageTitle } ) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked((prevState) => {
            return !prevState
        });
    };

    return (
        <section className="page-title bg-1" onClick={handleClick}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <span className={`text-white ${clicked ? 'clicked' : ''}`}>{clicked ? 'drink coffee' :  propsPageTitle.subtitle}</span>
                            <h1 className={`text-capitalize mb-5 text-lg ${clicked ? 'clicked' : ''}`}>{clicked ? '☕' : propsPageTitle.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;