import axios from 'axios';
import firebaseConfig from '../apiKeys';

export const getUsers = () => axios
  .get(`${firebaseConfig.databaseURL}/users.json`)
  .then((resp) => resp.data);

export const getUser = (uid) => axios
  .get(`${firebaseConfig.databaseURL}/users/${uid}.json`)
  .then((resp) => resp.data);

export const addUser = (userObj) => axios
  .post(`${firebaseConfig.databaseURL}/users.json`, userObj)
  .then((resp) => resp.data);

export const updateUser = (userObj) => new Promise((resolve, reject) => {
  axios.patch(`${firebaseConfig.databaseURL}/users/${userObj.uid}.json`, userObj)
    .then(() => getUser(userObj.uid).then(resolve))
    .catch((error) => reject(error));
});
