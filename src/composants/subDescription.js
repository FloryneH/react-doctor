import React from 'react';

function SubDescription({ title, content }) {
    return (
        <div class="row justify-content-center">
			<div class="col-lg-7 text-center">
				<div class="section-title">
					<h2>{title}</h2>
					<div class="divider mx-auto my-4"></div>
					<p>{content}</p>
				</div>
			</div>
		</div>
    );
}

export default SubDescription;