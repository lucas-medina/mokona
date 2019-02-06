import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDependencies } from '../actions/flagActions';
import '../scss/components/_presentation.scss';
import { getTextFragments } from '../utils/stringLib';
import PresentationLoader from './PresentationLoader';


class Presentation extends Component {

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

    const title = this.renderSeparateText(getTextFragments('Mokona'));
    const blockClassName = `presentation${appStatus ? ' presentation--' + appStatus : ''}`;

    return (
      <div className={blockClassName}>
        <h1 className="presentation__title">{title}</h1>
        {isLoadingDeps && <PresentationLoader />}
        <h2 className="presentation__subtitle" 
          onAnimationEnd={() => this.nextStage(loadDependencies)}>
          Personal organizer :)
        </h2>
      </div>
    )
  }
}

const mapStateToProps = ({ appStatus }) => ({ appStatus });

export default connect(mapStateToProps, { loadDependencies })(Presentation)