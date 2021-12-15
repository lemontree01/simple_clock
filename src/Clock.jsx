import React from 'react'

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render(){
        let hours = this.state.date.getHours();
        return this.props.fullFormat ? 
        (
            <div class="clock">
                <div className="hours">{this.state.date.getHours()}</div>
                
                <div className="minutes">{this.state.date.getMinutes()}</div>
                
                <div className="seconds">{ this.state.date.getSeconds()}</div>
            </div>
        ) :
        (
            <div class="clock">
            <div className="hours">{hours > 12 ? hours - 12 : hours}{hours > 12 ? <div class="mini">PM</div> : <div class="mini">AM</div>}</div>
            <div className="minutes">{this.state.date.getMinutes()}</div>
            <div className="seconds">{ this.state.date.getSeconds()}</div>
        </div>
        )

    }
}