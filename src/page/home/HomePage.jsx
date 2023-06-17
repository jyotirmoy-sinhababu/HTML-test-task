import React from 'react';

import Nav from '../../component/nav/Nav';
import Intro from '../../component/intro/Intro';
import TxtCnt from '../../component/txtCnt/TxtCnt';
import FirstCardCnt from '../../component/firstCardCnt/FirstCardCnt';
import ImgCard from '../../component/imgCard/ImgCard';

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
    </div>
  );
};

export default HomePage;
