import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="projects" element={<Projects />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
