import { LinkWrap, NavLink1 } from './authNavStyled';

export const AuthNav = () => {
  return (
    <LinkWrap>
      <NavLink1 to="/register">Register</NavLink1>
      <NavLink1 to="/login">Login</NavLink1>
    </LinkWrap>
  );
};
