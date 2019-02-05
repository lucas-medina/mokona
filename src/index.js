import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Block from './components/Block';
import './style.css';

export default class App extends Component {

  state = {
    elements: [],
    mouseX: null,
    mouseY: null,
    bodyClicked: false
  }

  componentDidMount() {
    window.addEventListener('mousemove', event => this.setState({mouseX: event.clientX, mouseY: event.clientY}));
    window.addEventListener('mousedown', this.clicked);
    window.addEventListener('mouseup', this.clicked);
  }

  clicked = (event) => {
    console.log(event);
    if (event.target.tagName !== 'BUTTON' && this.state.elements.length > 10) {
      let operation = '';
      if (event.type === 'mousedown'){
        operation = 'add';
      } else if (event.type === 'mouseup') {
        operation = 'remove';
        this.setState({ bodyClicked: true });
      }
  
      document.body.classList[operation]('clicked');
    }
  }

  renderHelper = () => {
    const mouseInfo = [this.state.mouseX, this.state.mouseY];
    this.setState((state) => (
      {
        elements: [...state.elements, React.cloneElement(<Block mouse={mouseInfo} key={state.elements.length + 1}/>)]
      }
    ));
  }

  render() {
    const { bodyClicked } = this.state;
    let buttonText;

    if (bodyClicked && this.state.elements.length > 10) {
      buttonText = <>No regrets, huh ;)</>
    } else {
      if (this.state.elements.length > 10) {
        buttonText = <>Oh, you better click and hold outside later</>
      } else {
        buttonText = <>Oh, you better click<br/>this bad boy</>
      }
    }

    return (
      <div>
        <button className="go" onClick={this.renderHelper}>
          {buttonText}
        </button>
        { 
          this.state.elements.length > 0 ? 
          <button onClick={() => this.setState({ elements: [], bodyClicked: false})} className="reset">Reset?</button> :
          null 
        }   
        {this.state.elements}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root')); 