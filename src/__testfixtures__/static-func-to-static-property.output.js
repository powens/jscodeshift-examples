import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetail extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    firstUser: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    redirectTo: null,
    userCount: 0,
  };

  static contextTypes = {
    intl: PropTypes.object,
  };


  render() {
    return (
      <div>Foo</div>
    );
  }
}


export default UserDetail;