import React from 'react';
import StyleSet from '../../styles/props/StyleSet'


export default function Cylinder(props) {
  return (
    <shape> 
      <appearance>
        <StyleSet 
          type={props.type}
          color={props.color}
          src={props.src}
        />
      </appearance> 
      <cylinder radius={props.radius} height={props.height}/> 
    </shape> 
  );
} 