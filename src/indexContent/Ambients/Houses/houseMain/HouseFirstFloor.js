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


//import stuffs 
import Bed from '../../../../props/stuffs/house/Bed'
import Desk from '../../../../props/stuffs/house/Desk'
import ChairOut from '../.././../../props/stuffs/house/chair-out.x3d'
import tableCenter from '../.././../../props/stuffs/house/chair-table-food.x3d'
import couchCenter from '../.././../../props/stuffs/house/couch-1.x3d'


//import textures
import whiteFloorTexture from '../../../../styles/textures/constructions/wall-white.jpg'
import WallTexture from '../../../../styles/textures/constructions/black-bricks-wall.jpg'
import GlassTextureMiniWall from '../../../../styles/textures/constructions/glass-green.png'
import WallGlassTexture from '../../../../styles/textures/constructions/wall-glass.png'
import WindowGlassTexture from '../../../../styles/textures/constructions/windowGlass.png'
import stairTexture from '../../../../styles/textures/constructions/white-floor-lux.jpeg'

export default  function HouseFirstFloor(props) {
  
  function Kitchen(){
    return(
      <group> 
        <transform translation="-15,0,0">
          <transform translation="-1.4,-0.9,-7.5">
            <Box size="2,1.3,20" type="color" color="white" />
          </transform>
          <transform translation="4.5,-0.89,-16.5">
            <Box size="10,1.3,2" type="color" color="white" />
          </transform>
        </transform>
      </group>
    )
  }

  function RoomMain(){
    function StairStep(props){
      return(
        <transform translation={`${props.x},${props.y},-17`}>
          <Box size="0.3,0.08,1" type="texture" src={stairTexture} />
        </transform>
      )
    }
    return(
      <group> 
        <transform translation="5,0,0">
          
          <StairStep x="2.1" y="1.4" />
          <StairStep x="1.8" y="1.2" />
          <StairStep x="1.5" y="1" />
          <StairStep x="1.2" y="0.8" />
          <StairStep x="0.9" y="0.6" />
          <StairStep x="0.6" y="0.4" />
          <StairStep x="0.3" y="0.2" />
          <StairStep x="0" y="0" />
          <StairStep x="-0.3" y="-0.2"/>
          <StairStep x="-0.6" y="-0.4" />
          <StairStep x="-0.9" y="-0.6" />
          <StairStep x="-1.2" y="-0.8" />
          <StairStep x="-1.5" y="-1" />
          <StairStep x="-1.8" y="-1.2" />
          <StairStep x="-2.1" y="-1.4" />

        </transform>
      </group>
    )
  }
  
  return (
    <group>{/* roomMain */}
      
      <Kitchen />

      <transform translation="-9,-1.5,0"  scale="0.009,0.009,0.009"  >
        <inline url={tableCenter}/>
      </transform>
      <transform translation="-9,-1.5,-4.5"  scale="0.009,0.009,0.009"  >
        <inline url={tableCenter}/>
      </transform>

      <transform translation="-9,-1.5,-9"  scale="0.009,0.009,0.009"  >
        <inline url={tableCenter}/>
      </transform>



      <transform translation="-15,-1.5,10"  scale="0.009,0.009,0.009"  >
        <inline url={ChairOut}/>
      </transform>
      <transform translation="-12,-1.5,10"  scale="0.009,0.009,0.009" rotation="0,1,0 0.15708">
        <inline url={ChairOut}/>
      </transform>
      <transform translation="-10,-1.5,10"  scale="0.009,0.009,0.009" rotation="0,1,0 0.349066">
        <inline url={ChairOut}/>
      </transform>
      
      {/*room*/}

     
      <transform translation="5,-1.4,-5"  scale="1.5,1.5,1.5"  rotation="0,1,0 -1.5708" >
        <inline url={couchCenter}/>
      </transform>


      <transform translation="0,-1.05,-5">
        <Box size="2,0.9,15" type="color" color="white" />
      </transform>

      <transform translation="10,0,0">
        <RoomMain />
      </transform>
      
      <FloorMain>
        <transform scale="1.05,1,1" translation="0, 0, -17.457">
          <Wall type="texture" src={WallTexture}/>
        </transform>  
      </FloorMain>

      
    
    </group>
  );
}

function FloorMain (props){
  const wallBehind = (
    <transform scale="1.05,1,1" translation="0, 0, 2.457">
      <Wall type="texture" src={WallTexture}/>
    </transform> 
  )
  const floorDefault = ( <><FloorMainVertical />{props.children}</>)
  const wallRightDefault =(<>
    <transform scale="1.05,1,1" translation="2.437, 0, 0" rotation="0,1,0 1.5708" >
      <Wall type="texture" src={WallTexture}/>
    </transform>
  </>)
  const wallRightWindow =(<>
    <transform scale="1.05,1,1" translation="2.437, 0, 0" rotation="0,1,0 1.5708" >
      <WindowWall type="texture" src={WallTexture}/>
      <Window type="texture" src={WindowGlassTexture} rotation="1.93731268032369" />
    </transform>
  </>)
  const miniGlassWall = (<>
    <transform scale="1.482,0.5,0.6" Translation="-1.05,-0.75, 2.437">
      <Wall type="texture" src={GlassTextureMiniWall}/>
    </transform>  
  </>)
  



  return(
    <group>
   
      <transform  translation="-15,0,0">
            <FloorMainVertical one={
              <transform scale="0.3,1,1" translation="-2.437, 0, -1.8" rotation="0,1,0 1.5708">
                <Wall type="texture" src={WallTexture} />
              </transform>
            }> 
              <transform scale="1.05,1,1" translation="-2.437, 0, 0" rotation="0,1,0 1.5708">
                <Wall type="texture" src={WallTexture} />
              </transform>
            </FloorMainVertical> 
            {props.children}{props.front}

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
            {floorDefault}
          </transform>
          <transform  translation="10,0,0">
          <FloorMainVertical 
            one={miniGlassWall}
          />
            {props.children}
          </transform>
          <transform  translation="15,0,0">{/*runner*/}
            <FloorMainVertical 
              one={(<>{wallRightDefault}
                <transform Translation="0,0, 2.437">
                  <DoorCenterWall type="texture" src={WallTexture}/>
                  <Door position="center" type="texture" src="" rotation="-1.93731268032369" />
                </transform>
              </>)}
              two={
                <transform scale="1,1,1" translation="2.437, 0, 0" rotation="0,1,0 -1.5708" >
                  <DoorWall type="texture" src={WallTexture}/>
                  <Door position="left" type="texture" src="" rotation="-1.93731268032369" />
                </transform>
              }
              three={wallRightDefault}
              four={
                <transform scale="1,1,1" translation="2.437, 0, 0" rotation="0,1,0 -1.5708" >
                  <DoorWall type="texture" src={WallTexture}/>
                  <Door position="left" type="texture" src="" rotation="-1.93731268032369" />
                </transform>
              }
              five={wallRightDefault}
            > 

            </FloorMainVertical> 
            {props.children}
          </transform>



          <transform  translation="20,0,0">{/*room bathroom */}
            <FloorMainVertical 
            
            four={
              <transform Translation="0,0, 2.437">
                <DoorCenterWall type="texture" src={WallTexture}/>
                <Door position="center" type="texture" src="" rotation="-1.93731268032369" />
              </transform>
            }/>
            {props.children}
          </transform>
       
          <transform  translation="25,0,0">
            <FloorMainVertical
              one={<>{wallRightWindow} {
                <transform scale="2.06,1,1" translation="-2.55, 0, 2.457">
                  <Wall type="texture" src={WallGlassTexture}/>
                </transform> 
              }</>}
              two={wallRightDefault }
              three={wallRightWindow}
              four={<>{wallRightDefault} {wallBehind}</>} 
              five={wallRightWindow }

            >
            </FloorMainVertical>
            {props.children}

            <transform  translation="0,0,5" rotation="0,1,0 -1.5708">
              <Bed />
            </transform>
           
            <transform  translation="2,0,-5" rotation="0,1,0 -1.5708">
              <Desk />
            </transform>

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
        {props.one} 
      </transform>
      

   </group>
  )
}
