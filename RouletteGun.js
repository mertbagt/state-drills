import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  constructor(props) {
    super(props)
    this.state = { 
      chamber: null,
      spinningTheChamber: false
    }
  }
  handleTrigger = () => {
    this.setState({ spinningTheChamber: true })
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false  
      })
    }, 2000)
  }
  handleDisplay = () => {   
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (this.state.chamber === this.props.bulletInChamber) {
      console.log(this.state.chamber)
      return 'BANG!!!'
    } else {
      console.log(this.state.chamber)
      return 'you\'re safe!'
    }    
  }
  componentWillUnmount() {
    clearInterval(this.timeout)
  }
  render() {  
    return (
      <div>
        <p>{this.handleDisplay()}</p>   
        <button
          onClick={this.handleTrigger}
        >
          Pull the trigger!
        </button>    
      </div>
    )
  }
}

export default RouletteGun