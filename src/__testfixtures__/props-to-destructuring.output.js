import React from 'react';

class MyComponent {
  nameCollision(nextProps) {
    const { name } = nextProps;
    if (this.props.name === name) {
      return true;
    }
    return false;
  }

  asAFunction() {
    const { doOpenThing } = this.props;
    const { isOpen } = this.state;
    const { doCloseThing } = this.context;
    if (isOpen) {
      doOpenThing();
    } else {
      doCloseThing();
    }
  }

  nestedContextThing() {
    const { intl } = this.context;
    const { messages } = intl;
    return messages['foobar'];
  }

  addToExisting() {
    const {
      isOpen,
      foobar,
    } = this.state;
    return foobar;
  }

  render() {
    const { name } = this.props;
    const { isOpen } = this.state;
    const { foo } = this.context;
    return (
      <div>
        <div>{isOpen}</div>
        <div>{name}</div>
        <div>{foo}</div>
      </div>
    );
  }
}

export default MyComponent;