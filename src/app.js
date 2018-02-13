import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Minimalistic React Boilerplate</h1>
          <p>With bare minimum configuration for Webpack, Babel, and ESLint</p>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
