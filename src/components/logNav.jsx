import { UserMenu } from './userMenu/userMenu';
import { AuthNav } from './authNav/authNav';
import { useAuth } from './hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>;
};
