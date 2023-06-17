import React from 'react';

import './imgCardStyle.css';

import one from '../../asset/img/personOne.png';
import two from '../../asset/img/personTwo.png';
import three from '../../asset/img/personThree.png';

const ImgCard = () => {
  return (
    <div className='main-imgCard-cnt'>
      <div className='imgCard-cnt'>
        <div className='imgCard-img-cnt'>
          <img className='imgCard-img' src={one} alt='first person' />
        </div>
        <div className='imgCard-txt-cnt'>
          <p className='imgCard-first-txt'>Lorem ipsum dolor sit .</p>
          <p className='imgCard-second-txt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante.
            Suspendisse varius dolor nec bibendum dignissim. Proin in diam a
            justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea
            dictumst.
          </p>
        </div>
      </div>
      <div className='imgCard-cnt'>
        <div className='imgCard-img-cnt'>
          <img className='imgCard-img' src={two} alt='second person' />
        </div>
        <div className='imgCard-txt-cnt'>
          <p className='imgCard-first-txt'>Lorem ipsum dolor sit .</p>
          <p className='imgCard-second-txt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante.
            Suspendisse varius dolor nec bibendum dignissim. Proin in diam a
            justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea
            dictumst.
          </p>
        </div>
      </div>
      <div className='imgCard-cnt'>
        <div className='imgCard-img-cnt'>
          <img className='imgCard-img' src={three} alt='third person' />
        </div>
        <div className='imgCard-txt-cnt'>
          <p className='imgCard-first-txt'>Lorem ipsum dolor sit .</p>
          <p className='imgCard-second-txt'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante.
            Suspendisse varius dolor nec bibendum dignissim. Proin in diam a
            justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea
            dictumst.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
