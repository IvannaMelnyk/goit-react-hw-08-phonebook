import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

import HeaderMUI from './components/HeaderMUI/HeaderMUI';
import BottomAppBar from './components/BottomAppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dbd8d5',
    },
    secondary: {
      main: '#d66a4f',
    },
  },
});

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Waiting</h1>
      ) : (
        <ThemeProvider theme={theme}>
          <HeaderMUI />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                restricted
              />
              <PublicRoute
                path="/login"
                component={LoginView}
                redirectTo="/contacts"
                restricted
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Suspense>
          </Switch>
          <BottomAppBar />
        </ThemeProvider>
      )}
    </Container>
  );
}
