import React, { Component } from 'react';
import{ Tag } from '../../Ui/misc'
import Reveal from 'react-reveal/Reveal'
import PlayerCard from './PlayerCard'


class MeetPlayer extends Component {
    state ={
        show: false
    }
    render() {
        return (
            <Reveal
                fraction ={0.7}
                onReveal={()=>{
                    this.setState({
                        show:true
                    })
                }}
            >
            <div className='home_meetplayers'
            style={{
                background:`#fff`
            }}>
           <div className="container">
            <div className="home_meetplayers_wrapper">
               <div className="home_card_wrapper">
               <PlayerCard  show={this.state.show}/>
               </div>
               <div className="home_text_wrapper">
                   <Tag 
                   matchStyle ={{
                       background:'#0e1731',
                       fontSize:'100px',
                       color:'#fff',
                       display:'inline-block',
                       marginBottom:'20px'
                      }}

                   >
                   Meet
                   </Tag>
                      <div>
                   <Tag 
                   matchStyle ={{
                       background:'#0e1731',
                       fontSize:'100px',
                       color:'#fff',
                       display:'inline-block',
                       marginBottom:'20px'
                      }}

                   >
                   The
                   </Tag>
                   </div>
                      <div>
                       <Tag 
                       matchStyle ={{
                           background:'#0e1731',
                           fontSize:'100px',
                           color:'#fff',
                           display:'inline-block',
                           marginBottom:'20px'
                       }}

                       >
                       Players
                       </Tag>
                   </div>
                   <div>
                       <Tag 
                       matchStyle ={{
                           background:'#fff',
                           fontSize:'20px',
                           color:'#0e1731',
                           display:'inline-block',
                           marginBottom:'20px',
                           border: '1px solid #0e1731'
                       }}
                       link
                       linkto = 'the_team'

                       >
                   Check them out &rarr;
                   </Tag>
               </div>
               </div>
            </div>
           </div>
       </div>
            </Reveal>
            
        );
    }
}

export default MeetPlayer;