import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';

const ModalBg = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
    position: relative;
    width: 80%;
    margin: 15% auto;
    padding: 60px;
    background-color: #e5daf8;
    border-radius: 5px;
`;

const ModalContent = styled.div`
    display: flex;
    gap: 60px;
`;

const ImgContainer = styled.div`
    display: flex;
    gap: 30px;
`;

const ImgWrapperB = styled.div`
    width: 400px;
    height: 250px;
    border: 1px solid purple;
    border-radius: 5px;
`;

const ImgWrapperS = styled.div`
    width: 120px;
    height: 250px;
    border: 1px solid purple;
    border-radius: 5px;
`;

const ContentContainer = styled.div`
    font-family: ${(props) => props.theme.contentFont};
    color: #000;
`;

const ProjName = styled.h3`
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 500;
`;

const ProjInfo = styled.p`
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.5;
    word-break: keep-all;
    white-space: pre-wrap;
`;

const LinkTxt = styled.span`
    font-size: 20px;
    font-family: ${(props) => props.theme.titleFont};
    font-weight: 500;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 20px;
`;

const Link = styled.a`
    font-size: 14px;
    color: #7c5ac9;
`;

const LinkIcon = styled(FaLink)`
    margin-right: 5px;
    vertical-align: top;
`;

const GitHubIcon = styled(FaGithub)`
    margin-right: 5px;
    vertical-align: top;
`;

const AccountTxt = styled.span`
    font-size: 14px;
`;

const AccountContainer = styled.div``;

const Modal = ({ proj }: projProps) => {
    return (
        <ModalBg>
            <ModalContainer>
                <ModalContent>
                    <ImgContainer>
                        <ImgWrapperB></ImgWrapperB>
                        <ImgWrapperS></ImgWrapperS>
                    </ImgContainer>
                    <ContentContainer>
                        <ProjName>{proj.name}</ProjName>
                        <ProjInfo>{proj.info}</ProjInfo>
                        <LinkTxt>Link</LinkTxt>
                        <LinkContainer>
                            <Link href={proj.link.url} target="_blank">
                                <LinkIcon />
                                배포 사이트 바로가기
                            </Link>
                            <Link href={proj.link.github} target="_blank">
                                <GitHubIcon />
                                깃헙 바로가기
                            </Link>
                        </LinkContainer>
                        <AccountTxt>테스트 계정</AccountTxt>
                        <AccountContainer></AccountContainer>
                    </ContentContainer>
                </ModalContent>
            </ModalContainer>
        </ModalBg>
    );
};

export default Modal;
