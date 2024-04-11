import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const navAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }

    60%{
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const Nav = styled.nav<{ $view: boolean }>`
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
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${navAnimation} 0.5s ease-in-out
        `};
    z-index: 1;
`;

const PageLink = styled.div`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
    cursor: pointer;
`;

interface INavProps {
    navRef: MutableRefObject<HTMLElement[]>;
}

const Navbar = ({ navRef }: INavProps) => {
    const [navIdx, setNavIdx] = useState<number | null>(null);
    const linkRef = useRef<HTMLDivElement[] | null[]>([]);

    const { animationRef, isInView } = useScrollAnimation();
    useEffect(() => {
        if (navIdx !== null && navRef.current[navIdx]) {
            navRef.current[navIdx].scrollIntoView({ behavior: 'smooth' });
            setNavIdx(null);
        }
    }, [navIdx, navRef]);

    return (
        <>
            <Nav ref={animationRef} $view={isInView}>
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
