import styled from 'styled-components';

export const SectionWrap = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 55px;
  z-index: 1;
  background: #4c57c7;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow: -1px -1px 1px #b6b6b6, 1px 1px 4px #babecc;
`;

export const Text = styled.p`
  width: 70%;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 16px;
  color: white;
  text-shadow: none;
  letter-spacing: 0.02em;
`;
