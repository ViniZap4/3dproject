import React from 'react';
import StyleSet from '../../styles/props/StyleSet'


export default function Box(props) {
  return (
    <shape> 
      <appearance>
        <StyleSet 
          type={props.type}
          color={props.color}
          src={props.src}
        />
      </appearance> 
      <box Size={props.size}></box> 
    </shape> 
  );
} 