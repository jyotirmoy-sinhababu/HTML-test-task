import React from 'react';

import './introStyle.css';

import Btn from '../btn/Btn';
import intro from '../../asset/img/intro.png';

const Intro = () => {
  return (
    <div className='main-intro-cnt'>
      <div className='intro-txt-cnt'>
        <h1 className='intro-header'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.{' '}
        </h1>
        <p className='intro-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit
          possimus id laboriosam et hic sequi officiis dolorem dolores?
          Voluptatum similique optio eos iste adipisci cum non sed eaque
          provident est hic reiciendis ratione excepturi natus, et, repellat
          corporis ut voluptates, placeat quam iure tempora. Ab sit delectus
          consequuntur repellat.
        </p>
        <Btn />
      </div>
      <div className='intro-img-cnt '>
        <img className='intro-img' src={intro} alt='intro-img' />
      </div>
    </div>
  );
};

export default Intro;
