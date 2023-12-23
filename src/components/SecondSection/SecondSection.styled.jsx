import styled from 'styled-components';

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 100%;
  min-height: 200px;
  background-color: #f4f4fd;
  box-shadow: -1px -1px 1px -1px, 1px 1px 1px #babecc;
  padding-top: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.black};
  font-size: 28px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  width: auto;
  letter-spacing: 0.02em;
`;
export const Text = styled.p`
  padding: 20px 0 40px 0;
  width: 70%;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 16px;
  letter-spacing: 0.02em;
`;
