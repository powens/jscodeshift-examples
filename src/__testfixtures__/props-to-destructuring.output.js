import React from 'react';

class MyComponent {
  nameCollision(nextProps) {
    const { name } = nextProps;
    const { name: name2 } = this.props;
    if (name2 === name) {
      return true;
    }
    return false;
  }

  asAFunction() {
    const { isOpen } = this.state;
    const { doOpenThing } = this.props;
    const { doCloseThing } = this.context;
    if (isOpen) {
      doOpenThing();
    } else {
      doCloseThing();
    }
  }

  nestedContextThing() {
    const { intl: { messages } } = this.context;
    return messages['foobar'];
  }

  addToExisting() {
    const { isOpen, foobar } = this.state;
    return foobar;
  }

  render() {
    const { isOpen } = this.state;
    const { name } = this.props;
    const { foo } = this.context;
    return (
      <div>
        <div>{isOpen}</div>
        <div>{name}</div>
        <div>{foo}</div>
      </div>
    )
  }
}

export default MyComponent;