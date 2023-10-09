import React from 'react';

function SidebarWidget({ propsSidebarWidget }) {
    return (
        <div class="col-lg-4">
            <div class="sidebar-widget schedule-widget mt-5">
                <h5 class="mb-4">{propsSidebarWidget.title}</h5>

                <ul class="list-unstyled">
                    {propsSidebarWidget.horraires.map((horraire, index) => (
                        <li className="d-flex justify-content-between align-items-center">
                            <a href="#">{horraire.days}</a>
                            <span>{horraire.hours}</span>
                        </li>
                    ))}
                </ul>

                <div className="sidebar-contatct-info mt-4">
                    <p className="mb-0">{propsSidebarWidget.infos.message}</p>
                    <h3>{propsSidebarWidget.infos.number}</h3>
                </div>
            </div>
        </div>
    );
}

export default SidebarWidget;