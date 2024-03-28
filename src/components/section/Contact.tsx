import styled from 'styled-components';
import { LuMail } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
`;

const Title = styled.h1`
    padding: 80px 0 120px;
    width: 100%;
    font-size: 64px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 60px;
    font-size: 20px;
    font-family: ${(props) => props.theme.contentFont};
    color: #fff;
`;

const EmailIcon = styled(LuMail)`
    margin-right: 10px;
    vertical-align: middle;
`;

const Link = styled.a`
    color: #fff;
`;

const GitHubIcon = styled(FaGithub)`
    margin-right: 10px;
    vertical-align: top;
`;

const BlogIcon = styled(SiVelog)`
    margin-right: 10px;
    vertical-align: top;
`;

const Contact = () => {
    return (
        <Section>
            <h1 className="a11yhidden">Contact</h1>
            <Title>CONTACT</Title>
            <IconContainer>
                <p>
                    <EmailIcon />
                    sohee407@gmail.com
                </p>
                <Link href="https://github.com/soheeyeo" target="_blank">
                    <GitHubIcon />
                    GitHub
                </Link>
                <Link href="https://velog.io/@florence_y/posts" target="_blank">
                    <BlogIcon />
                    Blog
                </Link>
            </IconContainer>
        </Section>
    );
};

export default Contact;
