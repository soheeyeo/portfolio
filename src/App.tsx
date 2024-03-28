import React from 'react';
import { GlobalStyle } from './styles/Globalstyle';
import Navbar from './components/navbar/Navbar';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills';
import Contact from './components/section/Contact';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
};

export default App;
