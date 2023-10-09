import React from 'react';

function SubDescription({ propsSubDescription }) {
    return (
        <div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<h2>{propsSubDescription.title}</h2>
					<div class="divider mx-auto my-4"></div>
					<p>{propsSubDescription.content}</p>
				</div>
			</div>
		</div>
    );
}

export default SubDescription;