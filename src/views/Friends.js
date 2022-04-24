import React, { useEffect } from 'react';
import { getFriends } from '../api/data/friendData';
import userType from '../utils/userType';

/* eslint-disable arrow-body-style */
const FriendCard = () => {
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const Friends = ({ user }) => {
  useEffect(() => {
    getFriends(user).then(console.log);
  }, [user]);

  return (
    <div>
      <h1>Friends</h1>
      <div>Friends</div>
      <FriendCard />
      <div>Pending Friends</div>
      <div>Friends Request</div>
    </div>
  );
};

Friends.propTypes = {
  user: userType.isRequired,
};

export default Friends;
