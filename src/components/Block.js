import React from 'react'

const rng = (maxNumber, decimal = null, minimum = null) => {
  const generatedNumber = Math.random() * maxNumber;
  const result = decimal ? parseFloat(generatedNumber.toPrecision(decimal)) : Math.ceil(generatedNumber);
  return minimum && result < minimum ? minimum : result;
}
const renderStyle = () => ({
  backgroundColor: `rgba(${rng(255)}, ${rng(255)}, ${rng(255)})`,
  top: `${rng(100)}vh`,
  left: `${rng(100)}vw`,
  animationTimingFunction: `ease-in-out, linear`,
  animationDuration: `.25s, ${rng(5000, 0, 3000)}ms`,
  padding: `${rng(100)}px`
});

export default class Block extends React.Component {
  
  state = { 
    x: null,
    y: null,
    style: renderStyle()
  }

  componentDidMount() {
    const [x, y] = this.props.mouse;
    this.setState({ x, y });
    window.addEventListener('mousemove', event => {
      this.setState({x: event.clientX, y: event.clientY})
    });
  }

  render() {
    const {x, y, style} = this.state;
    const positionX = `calc(${x}px - ${style.left})`;
    const positionY = `calc(${y}px - ${style.top})`
    return (
      <div onMouseMove={this.mouseMoved} style={{ ...style, transformOrigin: `${positionX} ${positionY}` }} className="block" />
    )
  }
}
