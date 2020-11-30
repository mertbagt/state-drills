import React from 'react';

class HelloWorld extends React.Component {
  static defaultProps = {
    who: 'world'
  }
  constructor(props) {
    super(props)
    this.state = {
      who: 'world'    
    }
  }
  handleWorldClick = () => {
    this.setState({ who: 'world' })
  }
  handleFriendClick = () => {
    this.setState({ who: 'friend' })
  }
  handleReactClick = () => {
    this.setState({ who: 'React' })
  }
  render() {  
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button
          onClick={this.handleWorldClick}
        >
          World
        </button>
        <button
          onClick={this.handleFriendClick}
        >
          Friend
        </button>
        <button
          onClick={this.handleReactClick}
        >
          React
        </button>
      </div>
    )
  }
}


export default HelloWorld