import React from 'react';

// import primaries
import Box from '../primaries/Box'


export default function Window(props) {
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
      <Box size="0.1, 1,0.15" type={props.typeBorder} color={props.Border} src={props.Border} />
    )
  }
  function BorderTop(){
    return(
      <Box size="1.9,0.065,0.15"  type={props.typeBorder} color={props.Border} src={props.Border}/>
    )
  }

  function Window(){
    return(
      <Box size="0.9, 0.95,0.063" type={props.type} color={props.color} src={props.src} />

    )
  }
  return (

    <group>
      <transform translation={`-0.45,0,0`}>
          <transform translation="0.83,0,0" rotation={`0,1,0,${props.rotation}`} center='0.45,0,0'>
            <Window/>
          </transform>
          <transform translation="-0.83,0,0" rotation={`0,1,0,${props.rotation/2}`} center='0.45,0,0'>
            <Window/>
          </transform>
        </transform>
        <transform translation="-0.9,0,0">
          <Border />
        </transform>
        <transform translation="0.9,0,0">
          <Border />
        </transform>
        <transform translation="0,0.5,0">
          <BorderTop />
        </transform>
        <transform translation="0,-0.5,0" scale="1.09,1.09,1.09">
          <BorderTop />
        </transform>
      
    </group>
  );
}