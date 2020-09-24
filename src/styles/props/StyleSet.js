import React from 'react';

export default function StyleSet(props) {
 
  if (props.type === "texture"){ return (
    <imageTexture   url={props.src}/>
  )}
  else return (
    <material diffuseColor={props.color}></material>
  )
} 