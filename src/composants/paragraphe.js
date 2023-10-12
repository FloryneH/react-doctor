import React from 'react';

function Paragraph({ propsParagraphe }) {
    return (
        <>
            {propsParagraphe.h2 ? (
                <h2 className="text-md">{propsParagraphe.title}</h2>
            ) : <h3 className={propsParagraphe.classTitle}>{propsParagraphe.title}</h3>
            }
            
            <div className={propsParagraphe.divClass}></div>
            <p className="lead">{propsParagraphe.subContent}</p>
            <p>{propsParagraphe.content}</p>

            {propsParagraphe.btn ? (
                <a href="appoinment.html" class="btn btn-main-2 btn-round-full mt-3">Make an Appoinment<i class="icofont-simple-right ml-2  "></i></a>
            ) : null}
        </>
    );
}

export default Paragraph;