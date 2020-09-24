import React from 'react';

// import primaries
import Box from '../primaries/Box'


export default function Door(props) {
  var positionX = "0"

  if(props.position === "left"){
    positionX="1"
  }else if(props.position === "right"){
    positionX="-1"
  }else if(props.position === "center"){ 
    positionX="0"
  }

  function Border(){
    return(
      <Box size="0.1, 2,0.15" type={props.typeBorder} color={props.Border} src={props.Border} />
    )
  }

  return (

    <group>
      <transform translation={`${positionX},-0.5,0`}>
        
        <transform translation="0,-0.045,0" rotation={`0,1,0,${props.rotation}`} center='0.45,0,0'>
         <Box size="0.9, 1.96,0.063" type={props.type} color={props.color} src={props.src} />
        </transform>

        <transform translation="-0.5,0,0">
          <Border />
        </transform>
        <transform translation="0.5,0,0">
          <Border />
        </transform>
        <transform translation="0,0.97,0">
          <Box size="0.9,0.065,0.15"  type={props.typeBorder} color={props.Border} src={props.Border}/>
        </transform>
      </transform>
    </group>
  );
}