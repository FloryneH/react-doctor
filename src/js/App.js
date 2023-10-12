// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../pages/Layout';
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

import '../plugins/bootstrap/css/bootstrap.min.css';
import '../plugins/icofont/icofont.min.css';
import '../css/style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Departments' element={<Departments/>}/>
                <Route path='/Department-Single' element={<DepartmentSingle/>}/>
                <Route path='/Doctors' element={<Doctors/>}/>
                <Route path='/Doctor-Single' element={<DoctorSingle/>}/>
                <Route path='/Appoinment' element={<Appoinment/>}/>
                <Route path='/BlogSidebar' element={<BlogSidebar/>}/>
                <Route path='/BlogSingle' element={<BlogSingle/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
