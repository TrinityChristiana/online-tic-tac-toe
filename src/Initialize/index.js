import React from 'react';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../api/auth';
import useFirebaseAuth from '../api/useFirebaseAuth';
import Navbar from '../components/Navbar';
import Routes from '../routes';

function Initialize() {
  const user = useFirebaseAuth();

  if (user === null) {
    return 'Loading...';
  }

  return (
    <>
      <Navbar user={user} />
      <div>
        {user ? (
          <Button onClick={signOutUser}>Logout</Button>
        ) : (
          <Button onClick={signInUser}>Login</Button>
        )}
      </div>
      {user && <Routes user={user} />}
    </>
  );
}

export default Initialize;
