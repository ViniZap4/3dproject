import React from 'react';
import './City.css'


//imports City Ambients 
import StreetCenter from './Ambients/street/StreetCenter'



export default function City(props) {
  
  return (
    <div className="City">
      
      <x3d className="Scenery"> 
        <scene>  
          <transform> {/* transform General */}
            <StreetCenter 
            
            />
         
          </transform>
        </scene> 
      </x3d> 
    </div>
  );
}