import React from 'react';

import star from '../../asset/img/star.png';
import proOne from '../../asset/img/profileOne.png';
import proTwo from '../../asset/img/profileTwo.png';
import proThree from '../../asset/img/profileThree.png';

import './profileStyle.css';

const ProfileCnt = () => {
  return (
    <div>
      <div>
        <div>
          <img className='star-img' src={star} alt='star' />
          <p>Lorem ipsum dolor sit .</p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <img src={proOne} alt='proOne' />
              </div>
              <div>
                <p>Jhon Doe</p>
                <p>CEO</p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div>
            <div>
              {' '}
              <div>
                <img src={proTwo} alt='proTwo' />
              </div>
              <div>
                <p>Amanda green</p>
                <p>Operations Manager</p>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div>
            <div>
              {' '}
              <div>
                <img src={proThree} alt='proThree' />
              </div>
              <div>
                <p>Sam Cooper</p>
                <p>Customer Service Manager</p>
              </div>
            </div>
            <div>
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
    </div>
  );
};

export default ProfileCnt;
