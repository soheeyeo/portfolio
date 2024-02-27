import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    padding: 20px 0;
    justify-content: right;
    width: 80%;
    gap: 36px;
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
