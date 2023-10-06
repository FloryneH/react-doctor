// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Departments from '../pages/Department/Departments';
import DepartmentSingle from '../pages/Department/DepartmentSingle';
import Doctors from '../pages/Doctors/Doctors';
import DoctorSingle from '../pages/Doctors/DoctorsSingle';
import Appoinment from '../pages/Doctors/Appoinment';
import BlogSidebar from '../pages/Blog/BlogSidebar';
import BlogSingle from '../pages/Blog/BlogSingle';
import Contact from '../pages/Contact';

import Navbar from '../composants/navbar';
import Footer from '../composants/footer';

import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../css/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Services',
    element: <Services />,
  },  
  {
    path: '/Departments',
    element: <Departments />,
  },
  {
    path: '/Department-Single',
    element: <DepartmentSingle />,
  },
  {
    path: '/Doctors',
    element: <Doctors />,
  },
  {
    path: '/Doctor-Single',
    element: <DoctorSingle />,
  },
  {
    path: '/Appoinment',
    element: <Appoinment />,
  },
  {
    path: '/BlogSidebar',
    element: <BlogSidebar />,
  },
  {
    path: '/BlogSingle',
    element: <BlogSingle />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  }
])
function App() {
  return (
    <section>
      <Navbar />

      <RouterProvider router={router} />
      
      <Footer />
    </section>
  );
}

export default App;
