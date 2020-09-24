import React from 'react';
import StyleSet from '../../styles/props/StyleSet'

export default function DoorWall(props) {
  return (
    <group>

      <transform translation="-1,0,0" >{/* left */}
        <shape> 
            <appearance>
              <StyleSet 
                type={props.type}
                color={props.color}
                src={props.src}
              />
            </appearance> 
            <box Size="3,3,0.126"></box> 
          </shape> 
      </transform>
      <transform translation="1,1,0">{/* top */}
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
      <transform translation="2,0,0">{/* right */}
        <shape> 
            <appearance>
              <StyleSet 
                type={props.type}
                color={props.color}
                src={props.src}
              />
            </appearance> 
            <box Size="1,3,0.126"></box> 
          </shape> 
      </transform>

    </group>
  );
}