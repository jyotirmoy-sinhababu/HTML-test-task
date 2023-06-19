import React from 'react';

import './homeStyle.css';

import Nav from '../../component/nav/Nav';
import Intro from '../../component/intro/Intro';
import TxtCnt from '../../component/txtCnt/TxtCnt';
import FirstCardCnt from '../../component/firstCardCnt/FirstCardCnt';
import ImgCard from '../../component/imgCard/ImgCard';
import ProductCard from '../../component/product/ProductCard';
import ProfileCard from '../../component/profileCard/ProfileCard';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <TxtCnt />
      <FirstCardCnt />
      <TxtCnt />
      <ImgCard />
      <TxtCnt />
      <ProductCard />
      <div className='home-para-cnt'>
        <p className='para-cnt'>Lorem ipsum dolor sit .</p>
      </div>
      <ProfileCard />
    </div>
  );
};

export default HomePage;
