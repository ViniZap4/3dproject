import React from 'react';
import StyleSet from '../../../styles/props/StyleSet'

//import primaries 

import Box from '../../primaries/Box'


//import textures
import woodBlackTexture from '../../../styles/textures/constructions/wood-black.png'

export default function Bed(props) {
 
  function FootBed(){
    return(
        <Box size="1.7,1.5,0.1" type="texture"  src={woodBlackTexture} />
    )
  }
 


  return (
    <group>
      <transform translation="0,-0.9,0">
      
      <transform translation="0,0.1,0">
        {props.Children}
      </transform>

      <Box size="1.5,0.1,2" type={props.type} color={props.color} src={props.src} />
      <transform translation="0,-0.1,0">
        <Box size="1.6,0.10,2" type="texture" src={woodBlackTexture} />
      </transform>
      
      <transform translation="0,-0.04,-1.05">
        <FootBed type={props.type} color={props.color} src={props.src}/>
      </transform>
      <transform translation="0,-0.2,1.05" scale="1,0.5,1">
        <FootBed type={props.type} color={props.color} src={props.src}/>
      </transform>

      </transform>
    </group>
  );
}
