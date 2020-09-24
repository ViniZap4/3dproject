import React from 'react';
import StyleSet from '../../styles/props/StyleSet'


export default function Sphere(props) {
  return (
    <shape> 
      <appearance>
        <StyleSet 
          type={props.type}
          color={props.color}
          src={props.src}
        />
      </appearance> 
      <sphere radius={props.radius}/>
    </shape> 
  );
} 