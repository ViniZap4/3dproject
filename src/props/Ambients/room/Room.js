import React from 'react';

import Floor from '../../constructions/floor'
import Wall from '../../constructions/wall'
import DoorWall from '../../constructions/DoorWall'
import WindowWall from '../../constructions/WindowWall'
import Ceiling from '../../constructions/Ceiling'

export default function Room(props) {
  return (
    <group>
      <transform translation="0, 0, -2.437" Scale="1.04,1,1">{/* front */}
       <WindowWall type={props.typeFront} color={props.colorFront} src={props.srcFront}  />
      </transform>
      <transform translation="-2.437, 0, 0" rotation="0,1,0 1.5708" > {/* left */}
        <Wall type={props.typeLeft} color={props.colorLeft} src={props.srcLeft}  />
      </transform>
      <transform translation="2.437, 0, 0" rotation="0,1,0 1.5708" >  {/* right */}
        <Wall type={props.typeRight} color={props.colorRight} src={props.srcRight} />
      </transform>
      <transform Translation="0,0, 2.437">
        <DoorWall type={props.typeDoor} color={props.colorDoor} src={props.srcDoor}  />
      </transform>

      <Floor type={props.typeFloor} color={props.colorFloor} src={props.srcFloor}  />
      <Ceiling type={props.typeCeiling} color={props.colorCeiling} src={props.srcCeiling}/>
    </group>
  );
}