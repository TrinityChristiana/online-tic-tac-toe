/* eslint-disable import/prefer-default-export */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getUser } from './userData';

const getData = (resp) => Object.values(resp.data);

export const getFriends = async (user) => {
  const sentRequests = await axios
    .get(
      `${firebaseConfig.databaseURL}/userFriends.json?orderBy="uid"&equalTo="${user.uid}"`,
    )
    .then(getData);
  const recievedRequests = await axios
    .get(
      `${firebaseConfig.databaseURL}/userFriends.json?orderBy="requestUid"&equalTo="${user.uid}"`,
    )
    .then(getData);

  const [requests, acceptedRequests, pendingRequests] = [[], [], []];
  const prom = await [...sentRequests, ...recievedRequests].map(
    async (friendObj) => {
      const { uid, accepted, requestUid } = friendObj;
      let otherUser = {};
      if ((uid === user.uid || requestUid === user.uid) && accepted) {
        if (uid === user.uid) {
          otherUser = await getUser(requestUid);
        } else {
          otherUser = await getUser(uid);
        }
        acceptedRequests.push({ ...friendObj, otherUser });
      } else if (uid === user.uid && !accepted) {
        otherUser = await getUser(requestUid);
        pendingRequests.push({ ...friendObj, otherUser });
      } else if (requestUid === user.uid && !accepted) {
        otherUser = await getUser(uid);
        requests.push({ ...friendObj, otherUser });
      }
      return otherUser;
    },
  );
  await Promise.all(prom);
  return { requests, acceptedRequests, pendingRequests };
};
