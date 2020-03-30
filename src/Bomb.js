import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {
        if (this.props.secondsLeft > 0) {
            return(
                `${this.props.secondsLeft} seconds left until I go boom!`
            )
        } else {
            const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

            return (
            <div>{message}</div>
    )
        }
    }
}

export default Bomb