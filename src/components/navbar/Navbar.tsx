import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    position: fixed;
    padding: 20px 0;
    margin: 0 auto;
    justify-content: right;
    width: 80%;
    gap: 36px;
    background-color: #1a1c20;
    top: 0;
    left: 0;
    right: 0;
`;

const PageLink = styled.div`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
`;

const Navbar = () => {
    return (
        <>
            <Nav>
                <PageLink>About</PageLink>
                <PageLink>Projects</PageLink>
                <PageLink>Skills</PageLink>
                <PageLink>Contact</PageLink>
            </Nav>
        </>
    );
};

export default Navbar;
