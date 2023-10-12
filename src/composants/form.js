import React from 'react';

function Form({ propsForm }) {
    return (
        <>
            <h2 class="mb-2 title-color">{propsForm.title}</h2>
            <p class="mb-4">{propsForm.subContent}</p>
            
            <form id="#" class="appoinment-form" method="post" action="#">
                <div class="row">
                    {propsForm.optionFormControlSelect1 || propsForm.optionFormControlSelect2 ? (
                        <>
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
                        </>
                    ) : null}
                    

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

                {propsForm.btn ? (
                    <input class="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                ) : <a class="btn btn-main btn-round-full" href="confirmation.html">Make Appoinment<i class="icofont-simple-right ml-2"></i></a> }
                
            </form>
        </>
    );
}

export default Form;