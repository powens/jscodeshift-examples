import React from 'react';
import { intlShape } from 'react-intl';
import { foo } from 'zzz';

class MyComponent {
  static contextTypes = {
    intl: intlShape,
  }
}

export default MyComponent;
