import React from 'react';
import StyleSet from '../../styles/props/StyleSet'

export default function DoorWallWall(props) {
  return (
    <group>

      <transform translation="-1.49,0,0" >{/* left */}
        <shape> 
            <appearance>
              <StyleSet 
                type={props.type}
                color={props.color}
                src={props.src}
              />
            </appearance> 
            <box Size="2,3,0.126"></box> 
          </shape> 
      </transform>
      <transform translation="0,1,0">{/* top */}
        <shape> 
            <appearance>
              <StyleSet 
                type={props.type}
                color={props.color}
                src={props.src}
              />
            </appearance> 
            <box Size="1,1,0.126"></box> 
          </shape> 
      </transform>
      <transform translation="1.49,0,0">{/* right */}
        <shape> 
            <appearance>
              <StyleSet 
                type={props.type}
                color={props.color}
                src={props.src}
              />
            </appearance> 
            <box Size="2,3,0.126"></box> 
          </shape> 
      </transform>

    </group>
  );
}