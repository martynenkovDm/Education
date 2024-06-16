import styled from 'styled-components';

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 20px;
  position: relative;
  width: 100%;
  margin-top: 71px;
  min-height: calc(100vh - 126px);
`;
export const Title = styled.h2`
  margin-bottom: 10px;
  margin-top: 10px;
  color: black;
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
`;

export const Container1 = styled.div`
  padding-bottom: 30px;
  margin-bottom: 10px;
  width: 90%;
  min-height: 530px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: white;
  border-radius: 18px;
  border: 1px solid;
`;
export const TextField = styled.input`
  width: 250px;
  height: 40px;
`;
export const InputCont = styled.div`
  padding: 15px 35px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
export const MaterialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const ListCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;
export const MaterialsItem = styled.li`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  background: white;
  border: 1px solid rgba(17, 17, 17, 0.1);
  box-shadow: 0px 9.04932px 26.5717px rgba(215, 228, 249, 0.25);
  border-radius: 15px;
  padding-left: 15px;
`;
export const MyLink = styled.a`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 14px;
  letter-spacing: 0.02em;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: blue;
    transition: 400ms;
  }
`;

export const Button = styled.button`
  width: 150px;
  margin-left: 30px;
  border-radius: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleWrap = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
`;
