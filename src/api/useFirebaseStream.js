import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export default useFirebaseStream = (refPath = '/') => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const tableRef = firebase.database().ref(refPath);
    tableRef.on('value', (snapshot) => {
      setData(snapshot.val());
    });

    return () => tableRef.off();
  }, []);

  return { data };
};
