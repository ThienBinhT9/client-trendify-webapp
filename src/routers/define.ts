import { IRoute } from '../interfaces/common';

//Components
import SignIn from '../pages/Authen/SignIn.tsx';
import SignUp from '../pages/Authen/SignUp.tsx';
import ForgotPassword from '../pages/Authen/ForgotPassword.tsx';

import Home from '../pages/Home/index.tsx';
import Profile from '../pages/Profile/index.tsx';

//Layout
import Main from '../layouts/Main/index.tsx';
import Empty from '../layouts/Empty/index.tsx';

export const publicRouters: IRoute[] = [
  { path: '/sign-in', element: SignIn, layout: Empty },
  { path: '/sign-up', element: SignUp, layout: Empty },
  { path: '/forgot-password', element: ForgotPassword, layout: Empty },
];

export const privateRouters: IRoute[] = [
  { path: '/', element: Home, layout: Main },
  { path: '/profile', element: Profile, layout: Main },
];
