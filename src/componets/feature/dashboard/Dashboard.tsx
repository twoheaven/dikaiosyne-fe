// src/components/feature/Dashboard/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Button from '../../common/button';

const Dashboard: React.FC = () => {
  const { authState, logout } = useAuth();
  const [userInfo, setUserInfo] = useState<{ username: string } | null>(null);

  useEffect(() => {
    if (authState.isAuthenticated) {
      setUserInfo({ username: authState.user || '' });
    }
  }, [authState]);

  if (!authState.isAuthenticated) {
    return <div>You need to login to view this page.</div>;
  }

  return (
    <div>
      <h2>Welcome to your Dashboard</h2>
      {userInfo && (
        <>
          <p>Username: {userInfo.username}</p>
          <Button onClick={logout} variant="filled">
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
