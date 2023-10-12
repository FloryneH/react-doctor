import React from "react";

function Qualifications( {propsQualifications} ) {
    return (
        <>
            {propsQualifications.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="edu-block mb-5">
                        <span className="h6 text-muted">{item.year}</span>
                        <h4 className="mb-3 title-color">{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Qualifications;