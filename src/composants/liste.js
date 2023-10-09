import React from 'react';

function Liste({ propsListe }) {
    return (
        <div class="department-content mt-5">
            <h3 class="mt-5 mb-4">{propsListe.title}</h3>
            <div class="divider my-4"></div>
            <ul class="list-unstyled department-service">
                {propsListe.items.map((item, index) => {
                    return (
                        <li><i class="icofont-check mr-2"></i>{item}</li>
                    );
                })}
            </ul>
            <a href="appoinment.html" class="btn btn-main-2 btn-round-full">{propsListe.buttonContent}<i class="icofont-simple-right ml-2  "></i></a>
        </div>
    );
}

export default Liste;