import React from 'react';
import Featured from '../Home/Featured/Feature'
import Matches from './Matches/Mathes'
import MeetPlayer from './MeetPlayers/MeetPlayer'
import TeamPormo from './TeamPromo/TeamPromo'



const Home = () => {
    return (
        <div className="bck_blue">
        <Featured />
       <Matches />
       <MeetPlayer />
       <TeamPormo />
            
        </div>
    );
};

export default Home;