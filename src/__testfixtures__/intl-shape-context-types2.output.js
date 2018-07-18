import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl';

class MyComponent {
  static contextTypes = {
    intl: intlShape,
  }
}

export default MyComponent;
