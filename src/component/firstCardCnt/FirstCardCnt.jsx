import React from 'react';
import Card from '../cards/Card';

import './firstCardStyle.css';

const FirstCardCnt = () => {
  return (
    <div className='main-firstCard-cnt'>
      <div className='firstCard-cnt'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FirstCardCnt;
