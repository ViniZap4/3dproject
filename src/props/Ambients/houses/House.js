import React from 'react';

//import constructions
import Floor from '../../constructions/floor'
import Wall from '../../constructions/wall'
import DoorWall from '../../constructions/DoorWall'
import DoorCenterWall from '../../constructions/DoorCenterWall'
import WindowWall from '../../constructions/WindowWall'
import Ceiling from '../../constructions/Ceiling'


//import ambients
import Room from '../room/Room'
import RoomMirror from '../room/RoomMirror'


export default function House(props) {
  return (
    <group>
      <group>{/*  front */}
        <transform translation="0,0,-5">
          <transform translation="-5,0,0">{/*  rom left */}
            <Room 
              typeRight={props.typeWall} colorRight={props.colorWall} srcRight={props.srcWall}
              typeLeft={props.typeWall} colorLeft={props.colorWall} srcLeft={props.srcWall}
              typeFront={props.typeWall}colorFront={props.colorWall}  srcFront={props.srcWall}
              typeDoor={props.typeWall} colorDoor={props.colorWall}  srcDoor={props.srcWall}

              typeFloor={props.typeFloor} colorFloor={props.colorFloor}  srcFloor={props.srcFloor}
              typeCeiling={props.typeCeiling} colorCeiling={props.colorCeiling}  srcCeiling={props.srcCeiling}
            />

            {props.room1}            
          </transform>
          {/*  rom center */}
          <transform translation="0, 0, -2.437" Scale="1.04,1,1">{/*  window center */}
            <WindowWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
             
          </transform>
          {/*  floor center */}
          <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
          <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />

          {props.room2}
          <transform translation="0, 0, 2.437" Scale="1.04,1,1">
            <DoorCenterWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />     
          </transform>
          <transform translation="5,0,0">{/*  rom right */}
            <RoomMirror 
              typeRight={props.typeWall} colorRight={props.colorWall} srcRight={props.srcWall}
              typeLeft={props.typeWall} colorLeft={props.colorWall} srcLeft={props.srcWall}
              typeFront={props.typeWall}colorFront={props.colorWall}  srcFront={props.srcWall}
              typeDoor={props.typeWall} colorDoor={props.colorWall}  srcDoor={props.srcWall}

              typeFloor={props.typeFloor} colorFloor={props.colorFloor}  srcFloor={props.srcFloor}
              typeCeiling={props.typeCeiling} colorCeiling={props.colorCeiling}  srcCeiling={props.srcCeiling}

            />
            {props.room3}
          </transform>
        </transform>
      </group>
     
      <group>{/*  center */}
        <transform translation="-5,0,0">{/* left */}
          <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
          <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />

        </transform>
        {/* center */}
        <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
        <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />

        {props.children}
        
        <transform translation="5,0,0">{/* right */}
          <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
          <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />
 
        </transform>
        <transform translation="7.437, 0, 0" rotation="0,1,0 1.5708" Scale="1.05,1,1">{/* left wall */}
          <Wall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
        </transform>
      </group>



      <group>{/*  behind */}
        <transform translation="0,0,5">
          <transform translation="-5,0,0">{/*  left */}
            <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
            <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />

            <transform translation="-2.437, 0, -2.6" rotation="0,1,0 1.5708" Scale="2.1,1,1">{/* left wall */}
              <WindowWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
            </transform>
            <transform Translation="0,0, 2.437" Scale="1.04,1,1">
              <WindowWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
            </transform> 
          </transform>
          <transform translation="0,0,0">{/*  center */}
            <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
            <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />
            <transform Translation="0,0, 2.437"  Scale="1.04,1,1">
            <DoorCenterWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
            </transform> 
          </transform>
          <transform translation="5,0,0">{/*  right */}
            <Floor type={props.typeFloor} color={props.colorFloor}  src={props.srcFloor} />
            <Ceiling type={props.typeCeiling} color={props.colorCeiling}  src={props.srcCeiling} />
            <transform translation="2.437, 0, 0" rotation="0,1,0 1.5708" Scale="1.04,1,1">{/* left wall */}
              <WindowWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
            </transform>
            <transform Translation="0,0, 2.437" Scale="1.04,1,1">
              <WindowWall type={props.typeWall} color={props.colorWall}  src={props.srcWall} />
            </transform> 
          </transform>
        </transform>
      </group>
  
    </group>
  );
}