import React from 'react';
import { GlobalStyle } from './styles/Globalstyle';
import Navbar from './components/navbar/Navbar';
import About from './components/section/About';
import Projects from './components/section/Projects';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <About />
            <Projects />
        </>
    );
};

export default App;
