import React,  { Component } from 'react'

import Timer from './Timer'

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            initialTime: '24:12',
        }
    }

    onChangeInitialTime(newTime){
        this.setState({
            initialTime: this.state.newTime
        })
    }

    render(){
        return(
            <div>
                <div>StopWatch</div>
                <div><Timer time={this.state.initialTime} /></div>
                <div>
                    <input onChange={event => this.setState({ newTime: event.target.value})} type="text" placeholder="Initial Time"/>
                    <button onClick={() => this.onChangeInitialTime()}>Run!</button>
                </div>
            </div>
        )
    }
}

export default App