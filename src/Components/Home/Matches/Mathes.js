import React from 'react';
import {Tag }from '../../Ui/misc'
import Blocks from './Blocks'

const Mathes = () => {
    return (
        <div className='home_matches_wrapper'>
           <div className='container'>
           <Tag 
           matchStyle ={{
            background:'#0e1731',
            fontSize:'50px',
            color:'#fff'
           }}
          
           > 
           Matches 
           </Tag>
           <Blocks />

           <Tag
           matchStyle ={{
            background:'#fff',
            fontSize:'20px',
            color:'#0e1731'
           }}
           link={true}
           linkto="/the_team"
           >
                See more matches
           </Tag>
           </div> 
        </div>
    );
};

export default Mathes;