import React from 'react'
import './App.css';
import {Clock} from "./Clock";


export class App extends React.Component {
    constructor(props) {
        super(props);
        //definig state
        this.state = {
            clockVisible: true,
            fullFormat: false
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
                    {this.state.clockVisible ? <Clock fullFormat={this.state.fullFormat}/>:
                       
                    <div class="clock">
                         {/* hide text */}
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                    }
                </div>
                <div className="buttons">
                    <button className="btn" onClick={this.toggle('clockVisible')}>Toggle clock</button>
                    <button className="btn" onClick={this.toggle('fullFormat')}>Toggle format</button>
                </div>

            </main>
        )
    }

}

