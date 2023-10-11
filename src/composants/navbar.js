import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import logo from '../assets/images/logo.png';


function Navbar() {
    const menuItems = [
        {
            title: 'Home',
            url: '/',
        },
        {
            title: 'About',
            url:'/About',
        },
        {
            title: 'Services',
            url: '/Services',
        },
        {
            title: 'Department',
            subMenu:[
                {
                    title: 'Departments',
                    url: '/Departments',
                },
                {
                    title: 'Department Single',
                    url: '/Department-Single',
                }
            ]
        },
        {
            title: 'Doctors',
            subMenu:[
                {
                    title: 'Doctors',
                    url: '/Doctors',
                },
                {
                    title: 'Doctor Single',
                    url: '/Doctor-Single',
                },
                {
                    title: 'Appointment',
                    url: '/Appoinment',
                }
            ]
        },
        {
            title: 'Blog',
            subMenu:[
                {
                    title: 'Blog Width Sidebar',
                    url: '/BlogSidebar',
                },
                {
                    title: 'Blog Single',
                    url: '/BlogSingle',
                }
            ]
        },
        {
            title: 'Contact',
            url: '/Contact',
        }
    ];

    const [scrolling, setScrolling] = useState(false);
    const yPosition = useRef(window.scrollY);
    const listenScrollEvent = () => {
        window.scrollY > yPosition.current ? setScrolling(true) : setScrolling(false);
        yPosition.current = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        }
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navigation fixed-top p-0 d-flex flex-column`}
            style={{
            top: scrolling ? '-200px' : '0',
            transition: 'top 0.3s ease-in-out',
        }} id="navbar">
            <Header />
            <div className=" w-100 bg-white m-0">
                <div className="container d-flex">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="" className="img-fluid" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            {menuItems.map((menu, index) => {
                                return (
                                    <li className="nav-item dropdown" key={index}>
                                        <Link
                                            className="nav-link dropdown-toggle"
                                            to={menu.url}
                                            id={`navbarDropdown${index}`}
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                        {menu.title}
                                        </Link>
                                        {menu.subMenu && (
                                            <div className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`} >
                                                {menu.subMenu.map((subMenuItem, subIndex) => (
                                                    <Link className="dropdown-item" to={subMenuItem.url} key={subIndex}>
                                                        {subMenuItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;