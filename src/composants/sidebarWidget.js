import React from 'react';

function SidebarWidget({ propsSidebarWidget }) {
    return (
        <>
            <h5 className="mb-4">{propsSidebarWidget.title}</h5>

            <ul className={propsSidebarWidget.ulClass}>
                {propsSidebarWidget.horraires.map((horraire, index) => (
                    <li className="d-flex justify-content-between align-items-center">
                        <a href="#">{horraire.days}</a>
                        <span>{horraire.hours}</span>
                    </li>
                ))}
            </ul>

            <div className="sidebar-contatct-info mt-4">
                <p className="mb-0">{propsSidebarWidget.infos.message}</p>
                <h3 className={propsSidebarWidget.h3Class}>{propsSidebarWidget.infos.number}</h3>
            </div>
        </>
    );
}

export default SidebarWidget;