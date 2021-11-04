import React from 'react'
import './App.css';
import {Clock} from "./Clock";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clockVisible: true,
            preciseMode: false
        }
    }

    toggle(state){
        return () => {
            this.setState(prev => ({
                [state]: !prev[state]
            }))
        }
    }

    render(){
        return(
            <main>
                <div className="clock-panel">
                    {this.state.clockVisible && <Clock preciseMode={this.state.preciseMode}/>}
                </div>
                <div className="buttons">
                    <button className="btn" onClick={this.toggle('clockVisible')}>Toggle clock</button>
                    <button className="btn" onClick={this.toggle('preciseMode')}>Toggle precise mode</button>
                </div>

            </main>
        )
    }

}

