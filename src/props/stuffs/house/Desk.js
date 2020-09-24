import React from 'react';
import StyleSet from '../../../styles/props/StyleSet'

//import primaries 

import Box from '../../primaries/Box'


//import textures
import woodBlackTexture from '../../../styles/textures/constructions/wood-black.png'
import woodDrawerTexture from '../../../styles/textures/stuffs/wood-drawer.jpg'
import drawerTexture from '../../../styles/textures/stuffs/drawer.jpg'



export default function Desk(props) {
 
  function FootBed(){
    return(
      <transform translation="0,-0.45,0">
        <Box size="0.05,0.9,0.81" type="texture"  src={woodBlackTexture} />
      </transform>

      
    )
  }
 
  function Drawer(){
    return(
      <group>
        <transform translation="0.37,0,0">{/* left  */}
          <Box size="0.02,0.2,0.81" type="texture"  src={woodBlackTexture} />
        </transform>
        <transform translation="0.79,0,0">{/* right  */}
          <Box size="0.02,0.2,0.81" type="texture"  src={woodBlackTexture} />
        </transform>
        <transform translation="0.58,0,-0.383">{/* front  */}
          <Box size="0.42,0.2,0.05" type="texture"  src={woodBlackTexture } />
        </transform>
        <transform translation="0.58,0,0.38">{/* drawer  */}
          <Box size="0.41,0.2,0.05" type="texture"  src={drawerTexture} />
        </transform>
        <transform translation="0.58,-0.1,0">{/* bottom  */}
          <Box size="0.41,0.01,0.81" type="texture"  src={woodBlackTexture} />
        </transform>


      </group>      
    )
  }


  return (
    <group>
      <transform translation="0,-0.6,0">
      
      <transform translation="0,0.1,0">
        {props.Children}
      </transform>

      <Box size="1.8,0.05,1" type="texture" src={woodDrawerTexture} />
      <transform translation="-0.81,0,0">
        <FootBed />
      </transform>
      <transform translation="0.81,0,0">
        <FootBed />
      </transform>

      <transform translation="0,-0.1,0">
        <Drawer />
      </transform>
      <transform translation="0,-0.3,0">
        <Drawer />
      </transform>
      <transform translation="0,-0.5,0">
        <Drawer />
      </transform>

      </transform>
    </group>
  );
}
