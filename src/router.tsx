import { NavigationRoutes } from '@common/constant';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={NavigationRoutes.SignIn} element={<p>Sign In</p>} />
        <Route path={NavigationRoutes.SignUp} element={<p>Sign Up</p>} />
        <Route
          path={NavigationRoutes.ForgotPassword}
          element={<p>Forgot Password</p>}
        />
        <Route
          path={NavigationRoutes.SetPassword}
          element={<p>Set Password</p>}
        />
        <Route path={NavigationRoutes.Landing} element={<p>Landing</p>} />
        <Route path="*" element={<Navigate to={NavigationRoutes.Landing} />} />
      </Routes>
    </BrowserRouter>
  );
});
