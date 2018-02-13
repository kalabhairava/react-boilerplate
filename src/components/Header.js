import React from 'react';

class Header extends React.Component {
  state = {
    colorClass: ''
  };

  colors = ['red', 'green', 'blue'];

  componentDidMount() {
    setInterval(() => {
      this.setState({ colorClass: this.getClass() });
    }, 100);
  }

  getClass() {
    const index = Math.floor(Math.random() * 3);
    console.log('index: ', this.colors[index]);
    return this.colors[index];
  }

  render() {
    return (
      <header className="header">
        <h1 className={`title ${this.state.colorClass}`}>{this.props.title}</h1>
        <p className="subtitle">{this.props.subtitle}</p>
      </header>
    );
  }
}

export default Header;
