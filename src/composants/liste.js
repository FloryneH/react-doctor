import React from 'react';

function Liste({ propsListe }) {
    return (
        <div className={propsListe.divClass}>
            {propsListe.h3 ? (
                <h3 className="mt-5 mb-4">{propsListe.title}</h3>
            ): <h5 class="mb-4">{propsListe.title}</h5> }
            <div className="divider my-4"></div>
            <ul className="list-unstyled department-service">
                {propsListe.items.map((item, index) => {
                    return (
                        <li><i className="icofont-check mr-2"></i>{item}</li>
                    );
                })}
            </ul>
            {propsListe.button ? (
                <a href="appoinment.html" className="btn btn-main-2 btn-round-full">{propsListe.buttonContent}<i className="icofont-simple-right ml-2  "></i></a>
            ) : null}
            
        </div>
    );
}

export default Liste;