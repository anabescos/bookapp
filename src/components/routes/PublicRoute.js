import {Navigate, Outlet} from 'react-router-dom';
import {BOOKS} from 'config/routes/paths';
import {useAuthContext} from 'contexts/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={BOOKS} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}