import styled, { keyframes, css } from 'styled-components';
import { MutableRefObject, forwardRef } from 'react';
import { LuMail } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Section = styled.section`
    margin: 60px auto 0;
    width: 80%;
    height: calc(100vh - 60px);
`;

const animation = keyframes`
    0%{
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
    }

    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const Title = styled.h1<{ $view: boolean }>`
    padding: 80px 0 120px;
    width: 100%;
    font-size: 64px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 600;
    color: #c8b6ff;
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${animation} 1s ease-in-out
        `};

    @media screen and (max-width: 1200px) {
        font-size: 3.75rem;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 80px;
        font-size: 3.5rem;
    }

    @media screen and (max-width: 480px) {
        padding-bottom: 50px;
        font-size: 3.25rem;
        text-align: center;
    }
`;

const introAnimation = keyframes`
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

const IconContainer = styled.div<{ $view: boolean }>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20%;
    margin-top: 100px;
    font-size: 20px;
    font-family: ${(props) => props.theme.contentFont};
    color: #fff;
    opacity: ${(props) => (props.$view ? 1 : 0)};
    animation: ${(props) =>
        props.$view &&
        css`
            ${introAnimation} 1s ease-in-out
        `};

    @media screen and (max-width: 1200px) {
        padding: 0 10%;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        font-size: 1.125rem;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 40px;
    }
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

const Contact = forwardRef((_, ref) => {
    const options = {
        rootMargin: '-10% 0px',
    };

    const { animationRef, isInView } = useScrollAnimation(options);

    const { current } = ref as MutableRefObject<HTMLElement[]>;

    return (
        <Section
            ref={(contactRef) => {
                if (ref && current && contactRef) {
                    current[3] = contactRef;
                }
            }}
        >
            <Title ref={animationRef} $view={isInView}>
                CONTACT
            </Title>
            <IconContainer ref={animationRef} $view={isInView}>
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
});

Contact.displayName = 'Contact';

export default Contact;
