import React from 'react';

import star from '../../asset/img/star.png';
import golden from '../../asset/img/golden star.png';
import proOne from '../../asset/img/profileOne.png';
import proTwo from '../../asset/img/profileTwo.png';
import proThree from '../../asset/img/profileThree.png';

const ProfileCard = () => {
  return (
    <div
      className='position-relative mt-5 border border-3 '
      style={{ height: '450px', width: '1100px', marginLeft: '250px' }}
    >
      <div className='d-flex align-items-center m-5   '>
        <img
          class='card-img '
          src={star}
          alt=''
          style={{ height: '50px', width: '50px' }}
        />
        <h4>Lorem ipsum dolor sit .</h4>
      </div>{' '}
      <div
        className='d-flex justify-content-lg-around position-absolute top-150 '
        style={{ top: '200px' }}
      >
        <div
          className='card w-25 rounded-3 pt-5 gap-3 '
          style={{ height: '420px', width: '450px' }}
        >
          <div className='d-flex align-items-center justify-content-lg-around'>
            {' '}
            <div className='d-flex align-items-center '>
              <img src={proOne} alt='' />
              <div className='flex-column '>
                <h6>Jhon Doe</h6>
                <h5>CEO</h5>
              </div>
            </div>{' '}
            <div>
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
            </div>
          </div>

          <div className='card-body align-items-center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
        <div
          className='card w-25 rounded-3 pt-5 gap-3'
          style={{ height: '420px', width: '450px' }}
        >
          <div className='d-flex align-items-center justify-content-lg-around'>
            {' '}
            <div className='d-flex align-items-center '>
              <img src={proThree} alt='' />
              <div className='flex-column '>
                <h6>Sam Cooper</h6>
                <h5>Customer Service Manager</h5>
              </div>
            </div>{' '}
            <div>
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
            </div>
          </div>

          <div className='card-body align-items-center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
        <div
          className='card w-25 rounded-3 pt-5 gap-3'
          style={{ height: '420px', width: '450px' }}
        >
          <div className='d-flex align-items-center justify-content-lg-around'>
            {' '}
            <div className='d-flex align-items-center '>
              <img src={proTwo} alt='' />
              <div className='flex-column '>
                <h6>Amanda green</h6>
                <h5>Operations Manager</h5>
              </div>
            </div>{' '}
            <div>
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
              <img
                style={{ height: '20px', width: '20px' }}
                src={golden}
                alt=''
              />
            </div>
          </div>

          <div className='card-body align-items-center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
