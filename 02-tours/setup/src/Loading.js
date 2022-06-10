import React from 'react';
import image from './Spinner-5.gif'

const Loading = () => {
  return (
    <div className="loading">
    <h3>Loading....</h3>
    <img src={image} alt="spinner"/>
    </div>
  );
};

export default Loading;
