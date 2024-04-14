import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    position: sticky;
    padding: 20px 10%;
    justify-content: right;
    width: 100%;
    gap: 36px;
    background-color: ${(props) => props.theme.bgColor};
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 20px 8%;
    }

    @media screen and (max-width: 480px) {
        padding: 20px 5%;
        gap: 24px;
    }
`;

const PageLink = styled.div`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.875rem;
    }
`;

interface INavProps {
    navRef: MutableRefObject<HTMLElement[]>;
}

const Navbar = ({ navRef }: INavProps) => {
    const [navIdx, setNavIdx] = useState<number | null>(null);
    const linkRef = useRef<HTMLDivElement[] | null[]>([]);

    useEffect(() => {
        if (navIdx !== null && navRef.current[navIdx]) {
            navRef.current[navIdx].scrollIntoView({ behavior: 'smooth' });
            setNavIdx(null);
        }
    }, [navIdx, navRef]);

    return (
        <>
            <Nav>
                <PageLink
                    ref={(ref) => (linkRef.current[0] = ref)}
                    onClick={() => {
                        setNavIdx(0);
                    }}
                >
                    About
                </PageLink>
                <PageLink
                    ref={(ref) => (linkRef.current[1] = ref)}
                    onClick={() => {
                        setNavIdx(1);
                    }}
                >
                    Projects
                </PageLink>
                <PageLink
                    ref={(ref) => (linkRef.current[2] = ref)}
                    onClick={() => {
                        setNavIdx(2);
                    }}
                >
                    Skills
                </PageLink>
                <PageLink
                    ref={(ref) => (linkRef.current[3] = ref)}
                    onClick={() => {
                        setNavIdx(3);
                    }}
                >
                    Contact
                </PageLink>
            </Nav>
        </>
    );
};

export default Navbar;
