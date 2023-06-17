import React from 'react';

import Nav from '../../component/nav/Nav';
import Intro from '../../component/intro/Intro';
import TxtCnt from '../../component/txtCnt/TxtCnt';
import FirstCardCnt from '../../component/firstCardCnt/FirstCardCnt';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <TxtCnt />
      <FirstCardCnt />
    </div>
  );
};

export default HomePage;
