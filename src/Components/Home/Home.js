import React from 'react';
import Featured from '../Home/Featured/Feature'
import Matches from './Matches/Mathes'
import MeetPlayer from './MeetPlayers/MeetPlayer'



const Home = () => {
    return (
        <div className="bck_blue">
        <Featured />
       <Matches />
       <MeetPlayer />
            
        </div>
    );
};

export default Home;