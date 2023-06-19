import React from 'react';

import Btn from '../btn/Btn';

import './productCardStyle.css';

import arrow from '../../asset/img/arrow.png';
import direction from '../../asset/img/direction.png';
import hand from '../../asset/img/hand.png';
import lens from '../../asset/img/lens.png';

const ProductCard = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '102px',
        }}
      >
        {' '}
        <div className='card border-0 w-50 '>
          <div className='d-flex align-items-center  '>
            <img src={hand} alt='' />
            <h4 className='card-title fw-bolder'>Lorem ipsum dolor sit .</h4>
          </div>
          <div className='card-body'>
            <p className='card-text fs-4 fw-light'>
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
              dignissim
            </p>
          </div>
          <Btn />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          paddingTop: '52px',
          paddingLeft: '65px',
        }}
      >
        {' '}
        <div className='card border-0 w-50 '>
          <div className='d-flex align-items-center  '>
            <img src={arrow} alt='' />
            <h4 className='card-title fw-bolder'>Lorem ipsum dolor sit .</h4>
          </div>
          <div className='card-body'>
            <p className='card-text fs-4 fw-light'>
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse
            </p>
          </div>
          <Btn />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '52px',
        }}
      >
        <div className='card border-0 w-50 '>
          <div className='d-flex align-items-center  '>
            <img src={lens} alt='' />
            <h4 className='card-title fw-bolder'>Lorem ipsum dolor sit .</h4>
          </div>
          <div className='card-body'>
            <p className='card-text fs-4 fw-light'>
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
              dignissim
            </p>
          </div>
          <Btn />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          paddingLeft: '65px',
          paddingTop: '52px',
        }}
      >
        {' '}
        <div className='card border-0 w-50 '>
          <div className='d-flex align-items-center  '>
            <img src={direction} alt='' />
            <h4 className='card-title fw-bolder'>Lorem ipsum dolor sit .</h4>
          </div>
          <div className='card-body'>
            <p className='card-text fs-4 fw-light'>
              adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
              mauris. ut maximus ante. Suspendisse
            </p>
          </div>
          <Btn />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
