import React from 'react';

class Accordion extends React.Component {
  static defaultProps = { 
    sectionsProp: []
  };

  state = {
    currentSectionIndex: null,
  };

  handleButtonClick(index) {
    this.setState({ 
      currentSectionIndex: index
    })
  }

  renderLi() {
    const { currentSectionIndex } = this.state 
    return this.props.sectionsProp.map((section, index) => (
      this.renderContent(section, index, currentSectionIndex)
    ))
  }

  renderContent(section, index, currentSectionIndex) {
    return (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {(currentSectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {  
    return (
      <ul>
        {this.renderLi()}    
      </ul>
    )
  }
}

export default Accordion