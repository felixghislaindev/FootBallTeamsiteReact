import React from 'react';
import Zoom from  'react-reveal/Zoom'
import kit from '../../../Resources/images/jersey.jpg'

const Animation = () => {
    return (
        <div className='promotion_animation'>
            <Zoom>
                <div className="left">
                    <span>Our</span>
                    <span>New Kit</span>
                </div>
            </Zoom>
            
            <Zoom>
                <div className="right">
                    <div
                        style={{background:`url(${kit}) no-repeat`
                    
                    }}
                    >
                    </div>
                </div>
            </Zoom>
           
        </div>
    );
};

export default Animation;