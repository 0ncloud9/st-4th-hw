import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      This is Detail Page
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Detail;