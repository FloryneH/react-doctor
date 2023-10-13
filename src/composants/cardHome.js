import React from 'react';

function CardHome({ propsCardHome }) {
    
    return (
        <>
            {propsCardHome.map((item, index) => {
                return (
                    <div class="feature-item mb-5 mb-lg-0">

                        <div class="feature-icon mb-4">
                            <i class={item.icon}></i>
                        </div>

                        <span>{item.subtitle}</span>
                        <h4 class="mb-3">{item.title}</h4>

                        {item.content ? <p>{item.content}</p> : null}

                        {item.list ? 
                            <ul class="w-hours list-unstyled">
                                {item.list.map((item, index) => {
                                    return (
                                        <li class="d-flex justify-content-between">{item.day}<span>{item.hours}</span></li>
                                    )
                                })}
                            </ul>
                        : null}

                        {item.button ? <a href={item.button.href} class={item.button.class}>{item.button.content}</a> : null}
                    </div>
                );
            })}
        </>
    );
}

export default CardHome;