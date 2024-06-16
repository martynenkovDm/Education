import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 1;
  background: white;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow: -1px -1px 1px #b6b6b6, 1px 1px 4px #babecc;
`;
export const LinkWrap = styled.div`
  padding-right: 20px;
`;

export const Svg = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 2px;
  padding-top: 10px;
  transition: 400ms;
`;
export const Use = styled.path``;
export const NavLink1 = styled(Link)`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 18px;
  letter-spacing: 0.02em;
  min-width: 25px;
  transition: 400ms;
  height: 25px;
  padding-left: 20px;
  text-shadow: none;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: blue;
    transition: 400ms;
  }
  &:hover ${Svg} {
    fill: blue;
    transition: 400ms;
  }
`;
export const NavLink = styled(Link)`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 22px;
  letter-spacing: 0.02em;
  width: 25px;
  transition: 400ms;
  height: 25px;
  padding-left: 20px;
  text-shadow: none;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    color: blue;
    transition: 400ms;
  }
  &:hover ${Svg} {
    fill: blue;
    transition: 400ms;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
`;
export const NavLink1Wrap = styled.div`
  width: 600px;
  height: 30px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: end;
  align-items: center;
`;
