import { NavigationRoutes } from '@common/constant';
import DashBoardPage from '@pages/dashboard';
import PrivateRoute from '@pages/private-route';
import SignInPage from '@pages/sign-in';
import { appState } from '@state/index';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        {appState.isUserAuthenticated ? (
          <>
            <Route path="*" element={<Navigate to={NavigationRoutes.Home} />} />
            <Route path={NavigationRoutes.Home} element={<PrivateRoute />}>
              <Route
                path={NavigationRoutes.Dashboard}
                element={<DashBoardPage />}
              />
              <Route
                path="/"
                element={<Navigate to={NavigationRoutes.Dashboard} />}
              />
            </Route>
          </>
        ) : (
          <>
            <Route path={NavigationRoutes.SignIn} element={<SignInPage />} />
            <Route path={NavigationRoutes.SignUp} element={<p>Sign Up</p>} />
            <Route
              path={NavigationRoutes.ForgotPassword}
              element={<p>Forgot Password</p>}
            />
            <Route
              path={NavigationRoutes.SetPassword}
              element={<p>Set Password</p>}
            />
            <Route
              path="*"
              element={<Navigate to={NavigationRoutes.SignIn} />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
});
