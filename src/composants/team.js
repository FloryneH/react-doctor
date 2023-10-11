import React from 'react';

function Team({ propsTeam }) {
	return (
		<section className="section team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2 className="mb-4">{propsTeam.title}</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>{propsTeam.content}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {propsTeam.team.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-block mb-5 mb-lg-0">
                                    <img src={item.img} alt="" className="img-fluid w-210 h-205" style={{width: '210px', height: '250px', objectFit: 'contain'}}/>

                                    <div className="content">
                                        <h4 className="mt-4 mb-0"><a href="doctor-single.html">{item.name}</a></h4>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
	);
}

export default Team;