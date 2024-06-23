import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

// Create your Navigation bar here
const PrivateRoute = observer(() => {
  return <Outlet />;
});

export default PrivateRoute;
