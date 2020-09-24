import React from 'react';

//import primaries
import Box from '../../../../props/primaries/Box'

//import constructions
import Floor from '../../../../props/constructions/floor'
import Wall from '../../../../props/constructions/wall'


//import textures
import whiteFloorTexture from '../../../../styles/textures/constructions/wall-white.jpg'
import stepTexture from '../../../../styles/textures/constructions/wood-black.png'

import car from '../../../../props/stuffs/car/car.x3d'

export default function HouseBase(props) {
  const wallLeft = (
    <transform translation="-2.437, 0, 0" rotation="0,1,0 1.5708" > {/* left */}
      <Wall type="texture" src={whiteFloorTexture}  />
    </transform>
  )
  const wallRight = (
    <transform translation="2.437, 0, 0" rotation="0,1,0 1.5708" > {/* left */}
      <Wall type="texture" src={whiteFloorTexture}  />
    </transform>
  )
  const wallFront = (
    <transform translation="0, 0, -2.437" Scale="1.045,1,1" > {/* left */}
      <Wall type="texture" src={whiteFloorTexture}  />
    </transform>
  )

  function Stair(){
    function StepTransform(props){
      return(
        <transform translation={`${props.x},${props.y},${props.z}`}>
          <Box size="4.7,0.25,0.30" type="texture" src={stepTexture} />
        </transform>
      )
    }
    return(<>
      <group>
               
        <StepTransform x="0" y="-1.35" z="2.4" />
        <StepTransform x="0" y="-1.10" z="2.1" />
        <StepTransform x="0" y="-0.95" z="1.8" />
        <StepTransform x="0" y="-0.70" z="1.5" />
        <StepTransform x="0" y="-0.45" z="1.2" />
        <StepTransform x="0" y="-0.20" z="0.9" />
        <StepTransform x="0" y="-0" z="0.6" />
        <transform translation="0,0,0">
          <Box size="4.7,0.25,1" type="texture" src={stepTexture} />
        </transform>
        <StepTransform x="0" y="0" z="-0.6" />
        <StepTransform x="0" y="0.20" z="-0.9" />
        <StepTransform x="0" y="0.45" z="-1.2" />
        <StepTransform x="0" y="0.70" z="-1.5" />
        <StepTransform x="0" y="0.95" z="-1.8" />
        <StepTransform x="0" y="1.10" z="-2.1" />
        <StepTransform x="0" y="1.35" z="-2.4" />

      
      </group>
    </>)
  }

  return (
    <group>

      <transform scale="1,1,1.1" translation="0, 0, 0">
        {wallLeft}
        {wallRight}      
      </transform>
      <transform scale="1,1,1.1" translation="0, 0, 5">
        {wallLeft}      
      </transform>

      <FloorTwo />
      <Stair />

      <transform translation="10,-1.5,3" scale="0.061,0.061,0.061">
        <inline url={car}/>
      </transform>

      <transform translation="5,0,0">
        <FloorTwo />{wallFront}
         
      </transform>
      <transform translation="10,0,0">
        <FloorTwo />{wallFront}  
        <transform scale="1,1,1.1" translation="0, 0, 0">
          {wallRight}    
        </transform>
        <transform scale="1,1,1.1" translation="0, 0, 5">
          {wallRight}   
        </transform>
      </transform>


      

    </group>
  );
}

function FloorTwo(){
  return (<>
    <Floor type="texture" src={whiteFloorTexture} />
    <transform  translation="0, 0, 5">
     <Floor type="texture" src={whiteFloorTexture} />
    </transform>
  </>)
}

