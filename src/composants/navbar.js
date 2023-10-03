import React from 'react';
import logo from '../assets/images/logo.png';
import { Dropdown } from 'bootstrap';

function Navbar() {
    const menuItems = [
        {
            title: 'Home',
            url: '#',
        },
        {
            title: 'About',
            url:'#'
        },
        {
            title: 'Services',
            url: '#',
        },
        {
            title: 'Department',
            url: '#',
            subMenu:[
                {
                    title: 'Departments',
                    url: '#',
                },
                {
                    title: 'Department Single',
                    url: '#',
                }
            ]
        },
        {
            title: 'Doctors',
            url: '#',
            subMenu:[
                {
                    title: 'Doctors',
                    url: '#',
                },
                {
                    title: 'Doctor Single',
                    url: '#',
                },
                {
                    title: 'Appointment',
                    url: '#',
                }
            ]
        },
        {
            title: 'Blog',
            url: '#',
            subMenu:[
                {
                    title: 'Blog Width Sidebar',
                    url: '#',
                },
                {
                    title: 'Blog Single',
                    url: '#',
                }
            ]
        },
        {
            title: 'Contact',
            url: '#',
        }
    ];
    return (
        <nav class="navbar navbar-expand-lg navigation" id="navbar">
            <div className="container ">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} alt="" className="img-fluid" />
                </a>
                <div className="collapse navbar-collapse" id="navbarmain">
                    <ul className="navbar-nav ml-auto">
                        {menuItems.map((menu, index) => {
                            return (
                                <li className="nav-item dropdown" key={index}>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href={menu.url}
                                        id={`navbarDropdown${index}`}
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {menu.title}
                                    </a>
                                    {menu.subMenu && (
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby={`navbarDropdown${index}`}
                                        >
                                            {menu.subMenu.map((subMenuItem, subIndex) => (
                                                <a
                                                    className="dropdown-item"
                                                    href={subMenuItem.url}
                                                    key={subIndex}
                                                >
                                                    {subMenuItem.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

{/* <div class="collapse navbar-collapse" id="navbarmain">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">Home</a>
        </li>

        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="department.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i class="icofont-thin-down"></i></a>
            <ul class="dropdown-menu" aria-labelledby="dropdown02">
                <li><a class="dropdown-item" href="department.html">Departments</a></li>
                <li><a class="dropdown-item" href="department-single.html">Department Single</a></li>
            </ul>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="doctor.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i class="icofont-thin-down"></i></a>
            <ul class="dropdown-menu" aria-labelledby="dropdown03">
                <li><a class="dropdown-item" href="doctor.html">Doctors</a></li>
                <li><a class="dropdown-item" href="doctor-single.html">Doctor Single</a></li>
                <li><a class="dropdown-item" href="appoinment.html">Appoinment</a></li>
            </ul>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="blog-sidebar.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i class="icofont-thin-down"></i></a>
            <ul class="dropdown-menu" aria-labelledby="dropdown05">
                <li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

                <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
            </ul>
        </li>

        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
    </ul>
</div> */}