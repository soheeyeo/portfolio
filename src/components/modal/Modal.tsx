import styled, { keyframes, css } from 'styled-components';
import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { BsCheck } from 'react-icons/bs';
import { PiDotBold } from 'react-icons/pi';
import { HiMiniXMark } from 'react-icons/hi2';
import uuid from 'react-uuid';

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0%{
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const modal = (isopen: boolean) => css`
    visibility: ${isopen ? 'visible' : 'hidden'};
    z-index: 1;
    animation: ${isopen ? fadeIn : fadeOut} 0.5s ease-out;
    transition: all 0.5s ease-out;
`;

const ModalBg = styled.div<{ $isopen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    ${(props) => modal(props.$isopen)}
`;

const ModalContainer = styled.div<{ $isopen: boolean }>`
    position: absolute;
    padding: 60px;
    width: 80%;
    height: 80vh;
    background-color: #e5daf8;
    border-radius: 5px;
    overflow: hidden;
    overflow-y: scroll;
    ${(props) => modal(props.$isopen)}

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(123, 90, 201, 0.3);
        border-radius: 6px;
    }
`;

const ModalContent = styled.div`
    display: flex;
    gap: 60px;
`;

const ImgContainer = styled.div`
    display: flex;
    position: sticky;
    gap: 30px;
    height: 100%;
    top: 25%;
`;

const ImgWrapperB = styled.div`
    width: 400px;
    height: 250px;
    background-color: #d4cae5;
    border-radius: 5px;
`;

const ImgWrapperS = styled.div`
    width: 120px;
    height: 250px;
    background-color: #d4cae5;
    border-radius: 5px;
`;

const ContentContainer = styled.div`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 15px;
    color: #000;
`;

const ProjName = styled.h3`
    display: inline;
    font-size: 24px;
    font-weight: 600;
`;

const ProjType = styled.span`
    display: inline;
    margin-left: 10px;
    font-size: 14px;
`;

const ProjInfo = styled.p`
    margin: 30px 0 20px;
    font-size: 15px;
    line-height: 1.8;
    word-break: keep-all;
    white-space: pre-wrap;
`;

const LinkTxt = styled.span`
    font-size: 19px;
    font-weight: 600;
    font-family: ${(props) => props.theme.titleFont};
`;

const LinkContainer = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

const LinkContainerVert = styled.div`
    margin: 20px 0;
`;

const LinkVert = styled.a`
    display: block;
    margin-bottom: 10px;
`;

const LinkContent = styled.span`
    margin-left: 5px;
`;

const Link = styled.a`
    margin-right: 8px;
    font-size: 18px;
    color: #000;
`;

const LinkIcon = styled(FaLink)`
    vertical-align: top;
`;

const GitHubIcon = styled(FaGithub)`
    vertical-align: top;
`;

const AccountContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 8px;
    padding: 10px;
    margin: 10px 0 20px 0;
    width: 40%;
    font-size: 13px;
    background-color: rgba(123, 90, 201, 0.2);
    border-radius: 5px;
`;

const AccountTxt = styled.span`
    margin-bottom: 7px;
    grid-column: 1 / 3;
`;

const AccountInfo = styled.span`
    font-weight: 600;
`;

const ContentBox = styled.div`
    margin-bottom: 20px;
`;

const ContentTitle = styled.p`
    margin-bottom: 20px;
    font-size: 17px;
    font-weight: 600;
`;

const ProjPlan = styled.p`
    margin: 30px 0 20px;
    font-size: 15px;
    line-height: 1.8;
    word-break: keep-all;
    white-space: pre-wrap;
`;

const CheckIcon = styled(BsCheck)`
    margin-right: 5px;
    vertical-align: top;
    width: 16px;
`;

const LiItem = styled.li`
    margin-bottom: 10px;
    line-height: 1.2;
`;

const StackContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const StackType = styled.span`
    padding-bottom: 10px;
`;

const StackLi = styled.div`
    font-weight: 600;
    color: #7c5ac9;
`;

const Stack = styled.span`
    margin-right: 15px;
`;

const LiIcon = styled(PiDotBold)`
    margin-right: 5px;
`;

const LessonTit = styled.p`
    margin-bottom: 10px;
    font-weight: 600;
`;

const Lesson = styled.p`
    margin-bottom: 20px;
    line-height: 1.5;
    word-break: keep-all;
    white-space: pre-wrap;
`;

const CloseIcon = styled(HiMiniXMark)`
    position: fixed;
    top: 96px;
    right: 190px;
    font-size: 24px;
    color: #000;
    cursor: pointer;
`;

const Modal = ({ proj, setIsOpen, isopen }: IprojProps) => {
    const stack = Object.values(proj.stack);
    const lesson = proj.lesson ? Object.entries(proj.lesson) : '';

    const handleOnClick = () => {
        setIsOpen(!isopen);
    };

    // 스크롤 방지
    const preventScroll = () => {
        const currentScroll = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${currentScroll}px`;
        document.body.style.overflowY = 'scroll';
        return currentScroll;
    };

    // 스크롤 허용
    const allowScroll = (prevScroll: number) => {
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, prevScroll);
    };

    useEffect(() => {
        const prevScroll = preventScroll();
        allowScroll(prevScroll);
    }, [isopen]);

    return (
        <ModalBg $isopen={isopen}>
            <ModalContainer $isopen={isopen}>
                <CloseIcon onClick={handleOnClick} />
                <ModalContent>
                    <ImgContainer>
                        <ImgWrapperB></ImgWrapperB>
                        <ImgWrapperS></ImgWrapperS>
                    </ImgContainer>
                    <ContentContainer>
                        <ProjName>{proj.name}</ProjName>
                        <ProjType>{proj.type}</ProjType>
                        <ProjInfo>{proj.info}</ProjInfo>
                        <LinkTxt>Link</LinkTxt>
                        {proj.link.accountId && proj.link.accountPw ? (
                            <>
                                <LinkContainer>
                                    <Link href={proj.link.url} target="_blank">
                                        <LinkIcon />
                                    </Link>
                                    <Link
                                        href={proj.link.github}
                                        target="_blank"
                                    >
                                        <GitHubIcon />
                                    </Link>
                                </LinkContainer>
                                <AccountContainer>
                                    <AccountTxt>테스트 계정</AccountTxt>
                                    <span>아이디</span>
                                    <AccountInfo>
                                        {proj.link.accountId}
                                    </AccountInfo>
                                    <span>패스워드</span>
                                    <AccountInfo>
                                        {proj.link.accountPw}
                                    </AccountInfo>
                                </AccountContainer>
                            </>
                        ) : (
                            <LinkContainerVert>
                                <LinkVert href={proj.link.url} target="_blank">
                                    <LinkIcon />
                                    <LinkContent>
                                        배포 사이트 바로가기
                                    </LinkContent>
                                </LinkVert>
                                <LinkVert
                                    href={proj.link.github}
                                    target="_blank"
                                >
                                    <GitHubIcon />
                                    <LinkContent>깃헙 바로가기</LinkContent>
                                </LinkVert>
                            </LinkContainerVert>
                        )}
                        {proj.plan && (
                            <ContentBox>
                                <ContentTitle>🐾 기획 배경</ContentTitle>
                                <ProjPlan>{proj.plan}</ProjPlan>
                            </ContentBox>
                        )}
                        <ContentBox>
                            <ContentTitle>📌 프로젝트 목표</ContentTitle>
                            <ul>
                                {proj.goals.map((a) => {
                                    return (
                                        <LiItem key={uuid()}>
                                            <CheckIcon />
                                            {a}
                                        </LiItem>
                                    );
                                })}
                            </ul>
                        </ContentBox>
                        <ContentBox>
                            <ContentTitle>🛠️ 사용 기술</ContentTitle>
                            <StackContainer>
                                <StackType>Front-End</StackType>
                                <StackLi>
                                    {stack[0].map((a: string) => {
                                        return <Stack key={uuid()}>{a}</Stack>;
                                    })}
                                </StackLi>
                                <StackType>Back-End</StackType>
                                <StackLi>
                                    {stack[1].map((a: string) => {
                                        return <Stack key={uuid()}>{a}</Stack>;
                                    })}
                                </StackLi>
                                <StackType>Etc</StackType>
                                <StackLi>
                                    {stack[2].map((a: string) => {
                                        return <Stack key={uuid()}>{a}</Stack>;
                                    })}
                                </StackLi>
                            </StackContainer>
                        </ContentBox>
                        <ContentBox>
                            <ContentTitle>💻 담당 기능</ContentTitle>
                            <ul>
                                {proj.role.map((a) => {
                                    return (
                                        <LiItem key={uuid()}>
                                            <LiIcon />
                                            {a}
                                        </LiItem>
                                    );
                                })}
                            </ul>
                        </ContentBox>
                        {lesson && (
                            <ContentBox>
                                <ContentTitle>💡 레슨런</ContentTitle>
                                <div>
                                    {lesson.map((a, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <LessonTit>{a[0]}</LessonTit>
                                                <Lesson>{a[1]}</Lesson>
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </ContentBox>
                        )}
                    </ContentContainer>
                </ModalContent>
            </ModalContainer>
        </ModalBg>
    );
};

export default Modal;
