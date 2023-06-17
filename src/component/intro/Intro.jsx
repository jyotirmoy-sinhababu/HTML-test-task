import React from 'react';

import Btn from '../btn/Btn';
import intro from '../../asset/img/intro.png';

const Intro = () => {
  return (
    <div>
      <div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit
          possimus id laboriosam et hic sequi officiis dolorem dolores?
          Voluptatum similique optio eos iste adipisci cum non sed eaque
          provident est hic reiciendis ratione excepturi natus, et, repellat
          corporis ut voluptates, placeat quam iure tempora. Ab sit delectus
          consequuntur repellat.
        </p>
        <Btn />
      </div>
      <div>
        <img src={intro} alt='' />
      </div>
    </div>
  );
};

export default Intro;
