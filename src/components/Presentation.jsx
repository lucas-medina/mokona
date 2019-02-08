import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDependencies, standbyApp } from '../actions/flagActions';
import '../scss/components/_presentation.scss';
import { getTextFragments } from '../utils/stringLib';
import PresentationLoader from './PresentationLoader';
import PresentationSubtitle from './PresentationSubtitle';


class Presentation extends Component {

  componentDidMount() {
    window.addEventListener('keydown', event => (
      event.keyCode === 13 ? this.props.standbyApp() : null
    ));
  }

  componentDidUpdate() {
    
  }

  renderSeparateText(arr) {
    return arr.map((text, index) => (
      <span className="presentation__titlestring" key={`${text}${index}`}>
        {text}
      </span>
    ));
  }

  nextStage(action) {
    if (typeof action === 'function') {
      setTimeout(() => {
        action();
      }, 1000);
    }
  }

  render() {
    const { appStatus, loadDependencies } = this.props;
    const isLoadingDeps = appStatus === 'loadingDependencies';
    const isReady = appStatus === 'standby';

    const title = this.renderSeparateText(getTextFragments('Mokona'));
    const blockClassName = `presentation${appStatus ? ' presentation--' + appStatus : ''}`;

    return (
      <div className={blockClassName}>
        <h1 className="presentation__title">{title}</h1>
        <div className="presentation__loadingwrapper">
          {isLoadingDeps && <PresentationLoader />}
          <h2 className="presentation__subtitle" 
            onAnimationEnd={() => this.nextStage(loadDependencies)}>
            {
              isLoadingDeps ? <PresentationSubtitle /> : 
              isReady ? 'So, what do you want to do? :)' : 'Your personal organizer :)'
            }
          </h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ appStatus }) => ({ appStatus });

export default connect(mapStateToProps, { loadDependencies, standbyApp })(Presentation)