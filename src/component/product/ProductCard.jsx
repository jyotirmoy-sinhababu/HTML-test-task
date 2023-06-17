import React from 'react';

import Btn from '../btn/Btn';

import '../productCardStyle.css';

import arrow from '../../asset/img/arrow.png';
import direction from '../../asset/img/direction.png';
import hand from '../../asset/img/hand.png';
import lens from '../../asset/img/lens.png';

const ProductCard = () => {
  return (
    <div className='productCard-main-cnt'>
      <div className='productCard-first-cnt'>
        <div>
          <img src={hand} alt='hand' />
          <p>Lorem ipsum dolor sit .</p>
        </div>
        <p>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
        </p>
        <Btn />
      </div>
      <div className='productCard-second-cnt'>
        <div>
          <img src={arrow} alt='arrow' />
          <p>Lorem ipsum dolor sit .</p>
        </div>
        <p>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse
        </p>
        <Btn />
      </div>
      <div className='productCard-third-cnt'>
        <div>
          <img src={lens} alt='lens' />
          <p>Lorem ipsum dolor sit .</p>
        </div>
        <p>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
        </p>
        <Btn />
      </div>
      <div className='productCard-forth-cnt'>
        <div>
          <img src={direction} alt='direction' />
          <p>Lorem ipsum dolor sit .</p>
        </div>
        <p>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse
        </p>
        <Btn />
      </div>
    </div>
  );
};

export default ProductCard;
