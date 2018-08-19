import React, { Component } from 'react';
import {MatchesData} from '../../../firebase'
import { firebaseLoop, reverveArray } from '../../Ui/misc'
import MatchesBlock from '../../Ui/matches_Block'
import Slide from 'react-reveal'


class Blocks extends Component {
    state = {
        matches: null
    }

    componentDidMount () {
        MatchesData.limitToLast(6).once('value').then(response => {
            const matches = firebaseLoop(response)
            this.setState({
                matches: reverveArray(matches)
            })
        })
            
    }
    showMatches = (matches) => (
       matches ? matches.map((match) => (
           <Slide bottom key={match.id}>
           <div className='item' >
                <div className='wrapper'>
                    <MatchesBlock match = {match} />
                </div>
           </div>
           </Slide>
       )): null
       
    )
    

    render() {
        console.log(this.state.matches)
        return (
            <div className='home_matches'>
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;