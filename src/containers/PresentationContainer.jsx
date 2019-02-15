import React, { Component } from 'react'
import Presentation from '../components/Presentation';
import { connect } from 'react-redux';
import ActionList from '../components/ActionList';
import HomeListItem from '../components/HomeListItem';

class PresentationContainer extends Component {
  render() {
    return (
      <>
        <Presentation>
          <ActionList>
            <HomeListItem to="/todo" icon="list" title="To-do" />
            <HomeListItem to="/annotations" icon="pencil" title="Annotations" />
          </ActionList>
        </Presentation>
      </>
    )
  }
}

export default connect(null, {})(PresentationContainer)