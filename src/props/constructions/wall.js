import React from 'react';
import StyleSet from '../../styles/props/StyleSet'

export default function wall(props) {
  
  
  return (
    <group>
      <shape> 
          <appearance>
            <StyleSet 
              type={props.type}
              color={props.color}
              src={props.src}
            />
          </appearance> 
          <box Size="4.8,3,0.126"></box> 
        </shape>
        
    </group>
  );
}