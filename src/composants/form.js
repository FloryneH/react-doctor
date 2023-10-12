import React from 'react';

function Form({ propsForm }) {
    return (
        <div class="col-lg-8">
            <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 class="mb-2 title-color">Book an appoinment</h2>
                <p class="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                
                <form id="#" class="appoinment-form" method="post" action="#">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    {propsForm.optionFormControlSelect1.map((item, index) => {
                                        return <option>{item}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                    {propsForm.optionFormControlSelect2.map((item, index) => {
                                        return <option>{item}</option>
                                    })}
                                </select>
                            </div>
                        </div>

                        {propsForm.inputs.map((item, index) => {
                            return (
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input name={item.name} id={item.id} type={item.type} class="form-control" placeholder={item.placeholder}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div class="form-group-2 mb-4">
                        <textarea name="message" id="message" class="form-control" rows="6" placeholder="Your Message"></textarea>
                    </div>

                    <a class="btn btn-main btn-round-full" href="confirmation.html">Make Appoinment<i class="icofont-simple-right ml-2"></i></a>
                </form>
            </div>
        </div>
    );
}

export default Form;