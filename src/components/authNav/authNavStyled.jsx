import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkWrap = styled.div`
  min-width: 525px;
  display: flex;
  justify-content: end;
  padding-right: 20px;
  height: 35px;
`;

export const NavLink1 = styled(Link)`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 22px;
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
`;

export const Button = styled.button``;
