import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Welcome to Tic Tac Toe</h1>
    <ul>
      {/* username and photo, staet game, settings, friends */}
      <div>
        <h2>Your Move</h2>
        <div>List of 3 games where it is your move</div>
        <Link to="/games">More Games</Link>
      </div>
      <div>
        <h2>Start A New Game</h2>
        <div>Start Solo Game</div>
        <div>Start Game with Friend</div>
      </div>
      <div>
        <h2>Friends</h2>
        <div>List of 5 random friends</div>
        <Link to="/friends">More Friends</Link>
      </div>
    </ul>
  </>
);

export default Home;
