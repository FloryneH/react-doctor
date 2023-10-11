import React from 'react';

function Paragraph({ propsParagraphe }) {
    return (
        <div className="department-content mt-5">
            <h3 className="text-md">{propsParagraphe.title}</h3>
            <div className="divider my-4"></div>
            <p className="lead">{propsParagraphe.subContent}</p>
            <p>{propsParagraphe.content}</p>
        </div>
    );
}

export default Paragraph;