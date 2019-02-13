import React, { Component } from 'react'
import { TweenLite, Power2 } from 'gsap'

import '../scss/components/_presentationSubtitle.scss';

export default class PresentationSubtitle extends Component {

  constructor(props) {
    super(props);

    this.animWrapper = React.createRef();
    this.animTween = null;
  }

  interval;
  phrases = [
    'Hold up! Loading dependencies', 'Mounting components',
    'Building visual structures', 'Getting things done',
    'Adjusting the workspace', 'Adjustind foreground data'
  ]

  state = {
    currentText: '',
    nextText: '',
    textIndex: 0,
    isAnimating: false
  }

  renderContent() {
    if (this.state.isAnimating) {
      this.animTween.progress(0).pause();
    }
    if (!this.state.currentText) {
      this.setState(state => ({
        currentText: this.phrases[state.textIndex],
        nextText: this.phrases[state.textIndex],
        textIndex: state.textIndex += 1
      }));
    } else {
      this.setState(state => ({
        currentText: state.nextText,
        nextText: this.phrases[state.textIndex],
        textIndex: state.textIndex === this.phrases.length - 1 ? 0 : state.textIndex += 1,
        isAnimating: true
      }));
    }

  }

  componentWillMount() {
    this.renderContent();
    this.interval = setInterval(() => {
      this.renderContent();
    }, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.animTween = TweenLite.to(this.animWrapper, .75, {
      y: '-100%',
      ease: Power2.easeInOut
    })
  }

  render() {
    return (
      <div className="presentationsubtitle">
        <div ref={div => this.animWrapper = div}>
          <span className="presentationsubtitle__item">{this.state.currentText || ''}...</span>
          <span className="presentationsubtitle__item presentationsubtitle__item--next">{this.state.nextText || ''}...</span>
        </div>
      </div>
    )
  }
}
