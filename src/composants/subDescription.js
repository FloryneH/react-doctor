import React from 'react';

function SubDescription({ propsSubDescription }) {
    return (
        <div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<h2>{propsSubDescription.title}</h2>
					<div className="divider mx-auto my-4"></div>
					<p>{propsSubDescription.content}</p>
				</div>
			</div>
		</div>
    );
}

export default SubDescription;