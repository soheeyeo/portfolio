import styled from 'styled-components';
import cover from '../../../assets/cover_cho.jpg';

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

const Project1 = () => {
    return (
        <Card>
            <ContentContainer>
                <ProjName></ProjName>
                <ProjDesc>
                    <ProjContent></ProjContent>
                    <ProjType></ProjType>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                    <ProjTech></ProjTech>
                </ProjDesc>
            </ContentContainer>
            <ImgWrapper>
                <Img src={cover} />
            </ImgWrapper>
        </Card>
    );
};

export default Project1;
