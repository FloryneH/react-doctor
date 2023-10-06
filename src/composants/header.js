import React from 'react';

function Header() {
	return (
		<header className='w-100'>
			<div className="header-top-bar">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<ul className="top-bar-info list-inline-item pl-0 mb-0">
								<li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@novena.com</a></li>
								<li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
							</ul>
						</div>
						<div className="col-lg-6">
							<div className="text-lg-right top-right-bar mt-2 mt-lg-0">
								<a href="tel:+23-345-67890" >
									<span>Call Now : </span>
									<span className="h4">823-4565-13456</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
