import { GlobalStyle } from './styles/Globalstyle';
import { useRef } from 'react';
import Cover from './components/section/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/section/About';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills';
import Contact from './components/section/Contact';

const App = () => {
    const navRef = useRef<HTMLElement[]>([]);

    return (
        <>
            <GlobalStyle />
            <Cover />
            <Navbar navRef={navRef} />
            <About ref={navRef} />
            <Projects ref={navRef} />
            <Skills ref={navRef} />
            <Contact ref={navRef} />
        </>
    );
};

export default App;
