import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../store/index.tsx';

import RouterApp from '../routers/RouterApp.tsx';

const Providers = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <RouterApp />
      </PersistGate>
    </Provider>
  );
};

export default Providers;
