import React from 'react';

import HouseSecondFloor from './HouseSecondFloor'
import FirstFloor from  './HouseFirstFloor'
import HouseBase from './HouseBase'
import HouseBaseOut from './HouseBaseOut'

export default function HouseMain(props) {
  return (
    <group>
      



      
      <transform Translation="0,3.2,0">
        <HouseSecondFloor />
      </transform>
      <FirstFloor />
      <transform Translation="15,-3,10">
        <HouseBase />
      </transform>
      <transform Translation="10,-3,10">
        <HouseBaseOut />
      </transform>

      

    </group>
  );
}

