import React from 'react';

function CardContact({ propsCardContact }) {
    
    return (
        <>
            {propsCardContact.map((item, index) => {
                return (
                    <div class="col-lg-4 col-sm-6 col-md-6">
                        <div class="contact-block mb-4 mb-lg-0">
                            <i class={item.icon}></i>
                            <h5>{item.title}</h5>
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CardContact;