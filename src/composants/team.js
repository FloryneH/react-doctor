import React from 'react';

import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import team4 from '../assets/images/team/4.jpg';

function Team({ title , content }) {
    const team = [
        {
            img: team1,
            name: 'John Marshal',
            position: 'Internist, Emergency Physician',
        },
        {
            img: team2,
            name: 'Marshal Root',
            position: 'Surgeon, Cardiologist',
        },
        {
            img: team3,
            name: 'Siamon john',
            position: 'Internist, General Practitioner',
        },
        {
            img: team4,
            name: 'Rishat Ahmed',
            position: 'Orthopedic Surgeon',
        }
    ]
	return (
		<section className="section team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2 className="mb-4">{title}</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {team.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team-block mb-5 mb-lg-0">
                                    <img src={item.img} alt="" className="img-fluid w-100"/>

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