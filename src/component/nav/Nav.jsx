import React from 'react';

import './navStyle.css';

import navImg from '../../asset/img/navImg.png';

const Nav = () => {
  return (
    <div className='nav-main-cnt'>
      <div className='nav-img-cnt'>
        <img className='nav-img' src={navImg} alt='nav-head-img' />
      </div>
      <div className='nav-btn-cnt'>
        <button className='nav-btn'>Nav 1</button>
        <button className='nav-btn'>Nav 2</button>
        <button className='nav-btn'>Nav 3</button>
        <button className='nav-btn'>Nav 4</button>
        <button className='nav-btn'>Nav 5</button>
        <button className='nav-btn'>Nav 6</button>
        <button className='nav-btn'>Nav 7</button>
        <button className='nav-btn'>Nav 8</button>
      </div>
    </div>
  );
};

export default Nav;
