import React, { memo, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/sign-in');
  }, [navigate]);
  return <Outlet />;
};

export default memo(ProtectRoute);
