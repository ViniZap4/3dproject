import React from 'react';


//import primaries
import Box from '../../../../props/primaries/Box'

//import constructions
import Floor from '../../../../props/constructions/floor'
import Wall from '../../../../props/constructions/wall'
import DoorWall from '../../../../props/constructions/DoorWall'
import DoorCenterWall from '../../../../props/constructions/DoorCenterWall'
import WindowWall from '../../../../props/constructions/WindowWall'
import Door from '../../../../props/constructions/Door'
import Window from '../../../../props/constructions/Window'




//import textures
import whiteFloorTexture from '../../../../styles/textures/constructions/wall-white.jpg'
import WallTexture from '../../../../styles/textures/constructions/black-bricks-wall.jpg'
import GlassTextureMiniWall from '../../../../styles/textures/constructions/glass-green.png'
import WallGlassTexture from '../../../../styles/textures/constructions/wall-glass.png'
import WindowGlassTexture from '../../../../styles/textures/constructions/windowGlass.png'

//import stuffs
import tvTable from '../../../../props/stuffs/house/tv-table.x3d'
import tableModern from '../../../../props/stuffs/house/mini-table-modern.x3d'
import Desk from '../../../../props/stuffs/house/Desk'

export default  function HouseSecondFloor(props) {
  
 

  function RoomMain(){
    return(
      <group> 
        <transform translation="0,0,0">
        </transform>
      </group>
    )
  }
  
  return (
    <group>{/* roomMain */}
      
      <transform translation="13.5,-0.9,0" scale="0.27,0.27,0.27" rotation="0,1,0 -1.5708" >
        <inline url={tvTable}/>
      </transform>

      <transform translation="12,-1.5,0"  rotation="0,1,0 1.5708" >
        <inline url={tableModern}/>
      </transform>
      
      
 

      <FloorMain>
        <transform scale="1.05,1.1,1" translation="0, 0, -17.457">
          <Wall type="texture" src={WallTexture}/>
        </transform>  
      </FloorMain>

    
    
    </group>
  );
}

function FloorMain (props){
  const floorDefault = ( <><FloorMainVertical />{props.children}</>)

  const wallBehind = (
    <transform scale="1.05,1,1" translation="0, 0, 7.457">
      <Wall type="texture" src={WallTexture}/>
    </transform> 
  )
  const wallFrontDefault = (
    <transform scale="1.05,1,1" translation="0, 0, -2.457">
      <Wall type="texture" src={WallTexture}/>
    </transform> 
  )
  const DoorFrontDefault = (
    <transform scale="1.05,1,1" translation="0, 0, -2.457">
      <DoorCenterWall type="texture" src={WallTexture}/>
      <Door position="center" type="texture" src="" rotation="-1.93731268032369" />
    </transform> 
  )
  const DoorLeftDefault = (
    <transform scale="1.05,1,1" translation="-2.437, 0, 0" rotation="0,1,0 1.5708" >
      <DoorCenterWall type="texture" src={WallTexture}/>
      <Door position="center" type="texture" src="" rotation="-1.93731268032369" />
    </transform> 
  )
  const wallLeftDefault =(<>
    <transform scale="1.05,1,1" translation="-2.437, 0, 0" rotation="0,1,0 1.5708" >
      <Wall type="texture" src={WallTexture}/>
    </transform>
  </>)
 
  const stairBox = (<>
    <transform  translation="0,0,-14.4">
      <transform scale="1,1,0.78">
      <Floor  type="texture" src={whiteFloorTexture}/>
      </transform> 
      <transform  translation="0,-1,-1.9">
        <Box size="5,1,0.05" type="texture" src={GlassTextureMiniWall} />
      </transform>
      <transform  translation="-2.477, -1, -2.47" rotation="0,1,0 1.5708" >
        <Box size="1.1,1,0.05" type="texture" src={GlassTextureMiniWall} />
      </transform>
    </transform>  
  </>)
  




  return(
    <group>
          <transform  translation="-20,0,0">    
            {floorDefault}
          </transform>
          <transform  translation="-15,0,0">    
            {floorDefault}
          </transform>
          <transform  translation="-10,0,0">
            {floorDefault}
          </transform>
          <transform  translation="-5,0,0">
           {floorDefault}
          </transform>
          <transform  translation="0,0,0">
            {floorDefault}
            
          </transform>
          <transform  translation="5,0,0">
            <FloorMainVertical /> 
            {props.children}
            {wallBehind}
          </transform>
          <transform  translation="10,0,0">    
          
           {floorDefault}
           {wallBehind} 
 
          </transform>
          <transform  translation="15,0,0">{/*runner*/} 
            {stairBox}
            <FloorMainVerticalOpen 
              one={wallLeftDefault}
              two={wallLeftDefault}
              three={<>{DoorLeftDefault}{wallFrontDefault}</>}
            />             
           {props.children}
          </transform>

          <transform  translation="20,0,0">{/*room bathroom */}
          <FloorMainVertical
            one={
              <transform scale="3.1,1,1" t translation="0, 0, 2.457">
                <Wall type="texture" src={WallGlassTexture}/>
              </transform>
            }
            three={DoorFrontDefault}
          />      
           {props.children}
          </transform> 
          <transform  translation="25,0,0"> 
            <FloorMainVertical
              three={<>
              <transform scale="5.2,1,1" translation="2.437, 0, 0" rotation="0,1,0 1.5708" >
                <Wall type="texture" src={WallGlassTexture}/>
              </transform>
              {wallFrontDefault}
            </>}
            />
            {props.children}       
          </transform>


   </group>
  )
}
function FloorMainVertical (props){
  return(
    <group>
      <transform  translation="0,0,-15">
        <Floor  type="texture" src={whiteFloorTexture}/>
        {props.five} {props.children}
      </transform>
      <FloorMainVerticalOpen
        four={props.four}
        three={props.three}
        two={props.two}
        one={props.one}
      >
        {props.children}
      </FloorMainVerticalOpen>
     
    </group>
  )
}

function FloorMainVerticalOpen (props){
  return(
    <group>

      <transform  translation="0,0,-10">
        <Floor  type="texture" src={whiteFloorTexture}/>
        {props.four} {props.children}
      </transform>
      <transform  translation="0,0,-5">
        <Floor  type="texture" src={whiteFloorTexture}/>
        {props.three} {props.children}
      </transform>
      <transform  translation="0,0,0">
        <Floor  type="texture" src={whiteFloorTexture}/>
        {props.two} {props.children}
      </transform>
      <transform  translation="0,0,5">
        <Floor  type="texture" src={whiteFloorTexture}/>
        {props.one}  {props.children}
      </transform>
     
    </group>
  )
}
