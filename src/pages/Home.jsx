import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <br />
      <Link to="/detail/1">Go to Detail</Link>
    </div>
  );
};

export default Home;
