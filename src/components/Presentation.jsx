import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDependencies, standbyApp, showOptions } from '../actions/flagActions';
import '../scss/components/_presentation.scss';
import { getTextFragments } from '../utils/stringLib';
import PresentationLoader from './PresentationLoader';
import PresentationSubtitle from './PresentationSubtitle';
import { TweenLite } from 'gsap';

class Presentation extends Component {

  componentDidMount() {
    window.addEventListener('keydown', event => (
      event.keyCode === 13 ? this.props.standbyApp() : null
    ));
  }

  componentDidUpdate() {
    if (this.props.appStatus === 'loadingDependencies') {
      this.nextStage(this.props.standbyApp, 4000);
    }
    if (this.props.appStatus === 'standby') {
      TweenLite.to(this.presentation, 1, {top: 100, y: 0, onComplete: () => {
        this.props.showOptions();
      }});
    }
  }

  renderSeparateText(arr) {
    return arr.map((text, index) => (
      <span className="presentation__titlestring" key={`${text}${index}`}>
        {text}
      </span>
    ));
  }

  nextStage(action, timer = 1000) {
    if (typeof action === 'function') {
      setTimeout(() => {
        action();
      }, timer);
    }
  }

  render() {
    const { appStatus, loadDependencies } = this.props;
    const isLoadingDeps = appStatus === 'loadingDependencies';
    const isReady = appStatus === 'standby';
    const isShowingOptions = appStatus === 'showing-options'

    const title = this.renderSeparateText(getTextFragments('Mokona'));
    const blockClassName = `presentation${appStatus ? ' presentation--' + appStatus : ''}`;

    return (
      <div ref={ref => this.presentation = ref} className={blockClassName}>
        <h1 className="presentation__title">{title}</h1>
        <div className="presentation__loadingwrapper">
          {isLoadingDeps && <PresentationLoader />}
          <h2 className="presentation__subtitle" 
            onAnimationEnd={() => !isShowingOptions && this.nextStage(loadDependencies)}>
            {
              isLoadingDeps ? <PresentationSubtitle /> : 
              isReady || isShowingOptions ? 'So, what do you want to do? :)' : 'Your personal organizer :)'
            }
          </h2>
        </div>
        { isShowingOptions ? <div className="presentation__content">{this.props.children}</div> : null }
      </div>
    )
  }
}

const mapStateToProps = ({ appStatus }) => ({ appStatus });

export default connect(mapStateToProps, { loadDependencies, standbyApp, showOptions })(Presentation)