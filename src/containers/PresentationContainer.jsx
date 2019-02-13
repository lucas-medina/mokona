import React, { Component } from 'react'
import Presentation from '../components/Presentation';
import { connect } from 'react-redux';
import ActionList from '../components/ActionList';

class PresentationContainer extends Component {
  render() {
    return (
      <>
        <Presentation>
          <ActionList />
        </Presentation>
      </>
    )
  }
}

export default connect(null, {})(PresentationContainer)