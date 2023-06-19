import React from 'react';

import { Navbar } from 'react-bootstrap';

import navImg from '../../asset/img/navImg.png';

const Nav = () => {
  return (
    <Navbar className='flex flex-column border border-end-0 border-start-0 border-top-0  border-3'>
      <div className='mt-5'>
        <img src={navImg} alt='Image' />
      </div>
      <div className='d-flex justify-content-lg-around  mt-5 w-50'>
        <div className='fs-4 fw-bold'>Nav 1</div>
        <div className='fs-4 fw-bold'>Nav 2</div>
        <div className='fs-4 fw-bold'>Nav 3</div>
        <div className='fs-4 fw-bold'>Nav 4</div>
        <div className='fs-4 fw-bold'>Nav 5</div>
        <div className='fs-4 fw-bold'>Nav 6</div>
        <div className='fs-4 fw-bold'>Nav 7</div>
        <div className='fs-4 fw-bold'>Nav 8</div>
      </div>
    </Navbar>
  );
};

export default Nav;
