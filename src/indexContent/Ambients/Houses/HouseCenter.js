import React from 'react';

//import constructions
import Door from '../../../props/constructions/Door'
import Floor from '../../../props/constructions/floor'

//import house model
import HouseModel from '../../../props/Ambients/houses/House'

//import stuffs
import Bed from '../../../props/stuffs/house/Bed'

//import textures
import floorTexture from '../../../styles/textures/constructions/floor-wood.jpeg'
import WallTexture from '../../../styles/textures/constructions/wood-wall.jpg'
import CeilingTexture from '../../../styles/textures/constructions/wall-white.jpg'

import DoorWhiteRoomTexture from '../../../styles/textures/constructions/door-white.jpg'
import WoodTexture from '../../../styles/textures/constructions/wood.jpeg'
import GrassTexture from '../../../styles/textures/ambient/grass.jpg'

export default function HouseCenter(props) {
  function Grass(){
    return(
      <group>
        <transform translation="0,-0.1,10">
          <transform translation="-5,0,0">
            <Floor type="texture" src={GrassTexture} />
          </transform>
          <Floor type="texture" src={GrassTexture} />
          <transform translation="5,0,0">
            <Floor type="texture" src={GrassTexture} />
          </transform>
 
        </transform>
      </group>
    )
  }
  return (
    <group>
      <HouseModel
        typeFloor="texture" srcFloor={floorTexture}
        typeWall="texture" srcWall={CeilingTexture}
        typeCeiling="texture" srcCeiling={CeilingTexture}

        
        room1={
          <group>
            
            <Door position="left" type="texture" src={DoorWhiteRoomTexture} rotation="-1.93731268032369"/>
          </group> 
        }
        room2={
          <group>
            <Door position="center" type="texture" src={DoorWhiteRoomTexture} typeBorder="texture" srcBorder={WoodTexture}/>
          </group> 
        }
        room3={
          <group>
            <Door position="right" type="texture" src={DoorWhiteRoomTexture} rotation="-1.93731268032369"/>
          </group> 
        }
      >  
        <group>
          <Bed />
        </group> 
        
      </HouseModel>

      <Grass />
    </group>
  );
}