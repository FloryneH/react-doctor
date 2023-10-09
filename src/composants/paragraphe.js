import React from 'react';

function Paragraph({ propsParagraphe }) {
    return (
        <div class="department-content mt-5">
            <h3 class="text-md">{propsParagraphe.title}</h3>
            <div class="divider my-4"></div>
            <p class="lead">{propsParagraphe.subContent}</p>
            <p>{propsParagraphe.content}</p>
        </div>
    );
}

export default Paragraph;