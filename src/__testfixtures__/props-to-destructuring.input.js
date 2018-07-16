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
    if (this.state.isOpen) {
      this.props.doOpenThing();
    } else {
      this.context.doCloseThing();
    }
  }

  nestedContextThing() {
    const { messages } = this.context.intl;
    return messages['foobar'];
  }

  addToExisting() {
    const { isOpen } = this.state;
    return this.state.foobar;
  }

  render() {
    return (
      <div>
        <div>{this.state.isOpen}</div>
        <div>{this.props.name}</div>
        <div>{this.context.foo}</div>
      </div>
    )
  }
}

export default MyComponent;