import React from 'react';

import Btn from '../btn/Btn';

import './productCardStyle.css';

import arrow from '../../asset/img/arrow.png';
import direction from '../../asset/img/direction.png';
import hand from '../../asset/img/hand.png';
import lens from '../../asset/img/lens.png';

const ProductCard = () => {
  return (
    <div className='productCard-main-cnt'>
      <div className='productCard-first-cnt'>
        <div className='productCard-firstPart'>
          <img className='productCard-img' src={hand} alt='hand' />
          <p className='productCard-firstTxt'>Lorem ipsum dolor sit .</p>
        </div>
        <p className='productCard-secondTxt'>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
        </p>
        <Btn />
      </div>
      <div className='productCard-second-cnt'>
        <div className='productCard-firstPart'>
          <img className='productCard-img' src={arrow} alt='arrow' />
          <p className='productCard-firstTxt'>Lorem ipsum dolor sit .</p>
        </div>
        <p className='productCard-secondTxt'>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse
        </p>
        <Btn />
      </div>
      <div className='productCard-third-cnt'>
        <div className='productCard-firstPart'>
          <img className='productCard-img' src={lens} alt='lens' />
          <p className='productCard-firstTxt'>Lorem ipsum dolor sit .</p>
        </div>
        <p className='productCard-secondTxt'>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
        </p>
        <Btn />
      </div>
      <div className='productCard-forth-cnt'>
        <div className='productCard-firstPart'>
          <img className='productCard-img' src={direction} alt='direction' />
          <p className='productCard-firstTxt'>Lorem ipsum dolor sit .</p>
        </div>
        <p className='productCard-secondTxt'>
          adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris.
          ut maximus ante. Suspendisse
        </p>
        <Btn />
      </div>
    </div>
  );
};

export default ProductCard;
