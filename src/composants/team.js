import React from 'react';

import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
import team4 from '../assets/images/team/4.jpg';

function Team() {
    const team = [
        {
            img: team1,
            name: 'John Marshal',
            position: 'Internist, Emergency Physician',
        },
        {
            img: team2,
            name: 'Marshal Root',
            position: 'Surgeon, Сardiologist',
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
		<section class="section team">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center">
                            <h2 class="mb-4">Meet Our Specialist</h2>
                            <div class="divider mx-auto my-4"></div>
                            <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    {team.map((item, index) => {
                        return (
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="team-block mb-5 mb-lg-0">
                                    <img src={item.img} alt="" class="img-fluid w-100"/>

                                    <div class="content">
                                        <h4 class="mt-4 mb-0"><a href="doctor-single.html">{item.name}</a></h4>
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