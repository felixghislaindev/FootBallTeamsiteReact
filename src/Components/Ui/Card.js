import React from 'react';

const Card = (props) => {
    return (
        <div className='player_card_wrapper'>
        <div className="player_card_thmb" 
        style ={{
            background:`#F2F2F2 url(${props.playerimg})`,
            
           }}
        >
        
        </div>
        <div className='player_card_info'>
           <div className="player_card_number">
            {props.number}
           </div>
           <div className="player_card_name">
                <span>{props.name}</span>
                <span>{props.lastname}</span>
           </div>
        </div>
            
        </div>
    );
};

export default Card;