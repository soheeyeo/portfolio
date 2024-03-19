import styled from 'styled-components';
import cover from '../../../assets/cover/co_1.jpg';
import Modal from '../../modal/Modal';
import { useState } from 'react';

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80vh;
`;

const ProjName = styled.h3`
    font-family: ${(props) => props.theme.contentFont};
    font-size: 48px;
    font-weight: 500;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjDesc = styled.div`
    margin-top: 80px;
    font-family: ${(props) => props.theme.contentFont};
`;

const ProjContent = styled.p`
    margin-bottom: 40px;
    font-size: 20px;
`;

const ProjType = styled.p`
    margin-bottom: 40px;
    font-size: 16px;
`;

const ProjTechContainer = styled.ul`
    display: flex;
`;

const ProjTechLi = styled.li``;

const ProjTech = styled.span`
    margin-right: 20px;
    font-weight: 600;
    font-size: 18px;
`;

const ImgWrapper = styled.div`
    width: 45%;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Project2 = ({ data }: projectProps) => {
    const proj = data[1];

    const stack = Object.values(data[1].stack).flat();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Card onClick={handleOnClick}>
                <ContentContainer>
                    <ProjName>{proj.name}</ProjName>
                    <ProjDesc>
                        <ProjContent>{proj.intro}</ProjContent>
                        <ProjType>{proj.type}</ProjType>
                        <ProjTechContainer>
                            {stack.map((a, i) => {
                                return (
                                    <ProjTechLi key={i}>
                                        <ProjTech>{a}</ProjTech>
                                    </ProjTechLi>
                                );
                            })}
                        </ProjTechContainer>
                    </ProjDesc>
                </ContentContainer>
                <ImgWrapper>
                    <Img src={cover} />
                </ImgWrapper>
            </Card>
            {isOpen && <Modal proj={proj} setIsOpen={setIsOpen} />}
        </>
    );
};

export default Project2;
