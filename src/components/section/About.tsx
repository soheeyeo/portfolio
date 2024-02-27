import styled from 'styled-components';
import { LuMail } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

const Section = styled.section`
    min-height: 100vh;
    margin: 0 auto;
    width: 80%;
`;

const NameBox = styled.div`
    margin: 100px 0 120px;
    width: 100%;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
`;

const Name = styled.p`
    font-size: 64px;
`;

const ContentsContainer = styled.div`
    display: flex;
    padding-left: 100px;
    gap: 140px;
`;

const IntroBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border: 0.5px solid #cac3e1;
    border-radius: 50%;
`;

const IntroTxt = styled.span`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 20px;
    color: #cac3e1;
`;

const IntroContainer = styled.div`
    width: 70%;
`;

const Intro = styled.p`
    font-size: 18px;
    font-family: ${(props) => props.theme.contentFont};
    line-height: 3;
    word-break: keep-all;
    white-space: pre-wrap;
    color: #fff;
`;

const IconContainer = styled.div`
    display: flex;
    margin-top: 60px;
    gap: 60px;
    font-size: 20px;
    font-family: ${(props) => props.theme.contentFont};
    color: #c8b6ff;
`;

const EmailIcon = styled(LuMail)`
    margin-right: 10px;
    vertical-align: middle;
`;

const Link = styled.a`
    color: #c8b6ff;
`;

const GitHubIcon = styled(FaGithub)`
    margin-right: 10px;
    vertical-align: top;
`;

const BlogIcon = styled(SiVelog)`
    margin-right: 10px;
    vertical-align: top;
`;

const About = () => {
    return (
        <Section>
            <h1 className="a11yhidden">ABOUT</h1>
            <NameBox>
                <Name>SOHEE YEO</Name>
            </NameBox>
            <ContentsContainer>
                <IntroBtn>
                    <IntroTxt>Intro</IntroTxt>
                </IntroBtn>
                <IntroContainer>
                    <Intro>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Id exercitationem repudiandae rerum deleniti
                        consequuntur animi distinctio aut, non sunt et obcaecati
                        harum eum fuga, dolor fugit eligendi numquam! Laborum,
                        quis.
                    </Intro>
                    <IconContainer>
                        <p>
                            <EmailIcon />
                            sohee@gmail.com
                        </p>
                        <Link
                            href="https://github.com/soheeyeo"
                            target="_blank"
                        >
                            <GitHubIcon />
                            GitHub
                        </Link>
                        <Link
                            href="https://velog.io/@florence_y/posts"
                            target="_blank"
                        >
                            <BlogIcon />
                            Blog
                        </Link>
                    </IconContainer>
                </IntroContainer>
            </ContentsContainer>
        </Section>
    );
};

export default About;
