import styled from 'styled-components';

export const SectionWrap = styled.footer`
  display: flex;
  position: relative;
  left: 0;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  min-height: 55px;
  z-index: 1;
  background: #1e1823;
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
export const Link = styled.a`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 22px;
  letter-spacing: 0.02em;
  padding-right: 15px;
  width: 15px;
  transition: 400ms;
  height: 25px;
  text-shadow: none;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    color: blue;
    transition: 400ms;
  }
`;
