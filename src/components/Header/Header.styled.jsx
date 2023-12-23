import styled from 'styled-components';

export const SectionWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 55px;
  z-index: 1;
  background: #4c57c7;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow: -1px -1px 1px #b6b6b6, 1px 1px 4px #babecc;
`;

export const HomeWrap = styled.div``;

export const LinkWrap = styled.div`
  padding-right: 20px;
`;

export const Svg = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 2px;
  padding-top: 10px;
  transition: 1000ms;
  &:hover {
    fill: white;
  }
`;
export const Use = styled.path``;
export const Link = styled.a`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 22px;
  letter-spacing: 0.02em;
  width: 25px;
  transition: 1000ms;
  height: 25px;
  padding-left: 20px;
  text-shadow: none;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: White;
    transition: 1000ms;
  }
  &:hover ${Svg} {
    fill: White;
    transition: 1000ms;
  }
`;
