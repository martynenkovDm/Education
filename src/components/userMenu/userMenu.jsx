import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import { LinkWrap, Label, Button } from './userMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LinkWrap>
      <Label>Welcome, {user.name}</Label>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </LinkWrap>
  );
};
