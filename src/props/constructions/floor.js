import React from 'react';
import StyleSet from '../../styles/props/StyleSet'


export default function Floor(props) {
  return (
    <group>
      <transform translation="0, -1.6, 0">
        <shape> 
          <appearance>
            <StyleSet 
              type={props.type}
              color={props.color}
              src={props.src}
            />
          </appearance> 
          <box Size="5,0.20,5"/>
        </shape> 
      </transform>
    </group>
  );
}