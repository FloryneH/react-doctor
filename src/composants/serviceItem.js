import React from 'react';

function ServiceItem({ propsServiceItem }) {
    return (
        <>
            {propsServiceItem.map((item, index) => {
                return (
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <div class="icon d-flex align-items-center">
                                <i class={item.icon}></i>
                                <h4 class="mt-3 mb-3">{item.title}</h4>
                            </div>

                            <div class="content">
                                <p class="mb-4">{item.content}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default ServiceItem;