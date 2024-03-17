import styled from 'styled-components';
import cover from '../../../assets/cover/cover_cho.jpg';
import Modal from '../../modal/Modal';

const Card = styled.div`
    display: flex;
    justify-content: space-between;
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

const Project1 = ({ data }: projectProps) => {
    const proj = data[0];

    const stack = Object.values(data[0].stack).flat();

    return (
        <>
            <Card>
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
            <Modal proj={proj} />
        </>
    );
};

export default Project1;
