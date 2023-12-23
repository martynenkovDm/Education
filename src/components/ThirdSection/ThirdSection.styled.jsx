import styled from 'styled-components';

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 100%;
  min-height: 300px;
  box-shadow: -1px -1px 1px -1px, 1px 1px 1px #babecc;
  padding: 50px 0px;
  gap: 20px;
`;

export const Title = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.black};
  font-size: 28px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  width: auto;
  letter-spacing: 0.02em;
  padding-bottom: 20px;
`;
export const Text = styled.p`
  padding-left: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 18px;
  letter-spacing: 0.02em;
`;

export const Btn = styled.button`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-radius: 25px;
  background-color: white;
  border-color: #1d1d1d;
  transition: 400ms;
  &:hover {
    box-shadow: -1px 4px 4px #babecc, 1px 1px 1px #babecc;
    transition: 400ms;
  }
`;

export const List = styled.ul`
  width: 85%;
  min-height: 100px;
  border-radius: 10px;
  border: solid 1px;
  border-color: gray;
  background-color: white;
  padding: 10px 20px;
  transition: 2000ms;
`;
export const Items = styled.li``;
export const Link = styled.a`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 16px;
  letter-spacing: 0.02em;
  width: 20px;
  transition: 500ms;
  height: 20px;
  &:visited {
    color: black;
  }
  &:hover {
    color: #4c57c7;
    transition: 500ms;
  }
`;
