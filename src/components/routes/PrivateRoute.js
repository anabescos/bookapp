
import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from 'config/routes/paths';
import {useAuthContext} from 'contexts/authContext';

export default function PrivateRoute() {
  const {isAuthenticated, logout} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
      <button onClick={logout}>Log out</button>
    </div>
  );
}