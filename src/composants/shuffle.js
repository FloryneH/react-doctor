import React from 'react';

function ShuffleFilter({ propsShuffle, propsFilter }) {

	return (
        <div className="container">
            <div className="col-12 text-center  mb-5">
                <div className="btn-group btn-group-toggle " data-toggle="buttons">
                    {propsFilter.map((item, index) => (
                        <button type="button" className="btn" key={index} data-group={item.dataGroup}>{item.title}</button>
                    ))}
                </div>
            </div>


            <div className="row portfolio-gallery">
                {propsShuffle.doctors.map((item, index) => (
                    <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" key={index}>
                        <div className="position-relative doctor-inner-box" data-group={propsShuffle.doctors[index].dataGroup}>
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                    <img src={propsShuffle.doctors[index].image} alt="doctor-image" className="img-fluid w-100" style={{width: '100%', height: '295px', objectFit: 'contain'}}/>
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">{propsShuffle.doctors[index].name}</a></h4>
                                <p>{propsShuffle.doctors[index].description}</p>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
	);
}

export default ShuffleFilter;