import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { updateUser } from './data/userData';

const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        updateUser({
          displayName: userObj.displayName,
          email: userObj.email,
          photoURL: userObj.photoURL,
          creationTime: userObj.metadata.creationTime,
          lastSignInTime: userObj.metadata.lastSignInTime,
          uid: userObj.uid,
        }).then(setUser);
      } else if (user || userObj === null) {
        setUser(false);
      }
    });
  }, []);

  return user;
};

export default useFirebaseAuth;
