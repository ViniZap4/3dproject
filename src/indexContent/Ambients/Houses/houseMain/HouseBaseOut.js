import React from 'react';

//import primaries
import Box from '../../../../props/primaries/Box'

//import constructions
import Floor from '../../../../props/constructions/floor'
import Wall from '../../../../props/constructions/wall'


//import textures
import whiteFloorTexture from '../../../../styles/textures/constructions/wall-white.jpg'
import stepTexture from '../../../../styles/textures/constructions/wood-black.png'


export default function HouseBaseOut(props) {

  return (
    <group>

      <transform translation="-5,0,-15">
        <Box size="45,2.9,25" />
      </transform>
      <transform translation="-12.5,0,2.5">
        <Box size="30,2.9,10" />
      </transform>
      <transform translation="-30,0,-10">
        <Box size="5,2.9,35" />
      </transform>


    </group>
  );
}


