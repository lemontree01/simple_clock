import React from 'react'

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.startInterval()
    }

    componentDidUpdate(prevProps) {
        if (this.props.preciseMode === prevProps.preciseMode) {
            return
        }
        clearInterval(this.intervalID)
        this.startInterval()
    }

    startInterval() {
        this.intervalID = setInterval(() => {
            this.setState({date: new Date()})
        }, this.props.preciseMode ? 100 : 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render(){
        return (
            <div class="clock">
                {this.props.preciseMode ?
                        this.state.date.toISOString() :
                        this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}