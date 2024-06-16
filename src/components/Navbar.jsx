import React from 'react';
import {
  Nav,
  NavLink,
  NavLink1,
  NavMenu,
  Svg,
  Use,
  NavLink1Wrap,
} from './NavbarElements';
import { AppBar } from './logNav';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div>
            <NavLink to="/">
              <Svg id="icon-home" viewBox="0 0 32 32">
                <Use d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></Use>
              </Svg>
              Education
            </NavLink>
          </div>
          <NavLink1Wrap>
            <NavLink1 to="/materials">Матеріали</NavLink1>
            <NavLink1 to="/test">Тести</NavLink1>
            <NavLink1 to="/curs">Курси</NavLink1>
          </NavLink1Wrap>
          <AppBar></AppBar>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
