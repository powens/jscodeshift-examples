import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetail extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      firstUser: PropTypes.shape().isRequired,
    };
  }

  static get defaultProps() {
    return {
      redirectTo: null,
      userCount: 0,
    };
  }

  static get contextTypes() {
    return {
      intl: PropTypes.object,
    }
  }


  render() {
    return (
      <div>Foo</div>
    );
  }
}


export default UserDetail;