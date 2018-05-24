import React, { PureComponent } from 'react';

class App extends PureComponent {
  static defaultProps = {
    introText: 'My Intro Text'
  }
  
  render() {
    const {
      introText
    } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {introText}
        </p>
      </div>
    );
  }
}

export default App;
