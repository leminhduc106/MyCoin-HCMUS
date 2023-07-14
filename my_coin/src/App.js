import React from 'react';
import Blockchain from './components/Blockchain'

          href="https://reactjs.org"
class App extends React.Component {

  render() {
      return (
          <div className="ui container" style={{ marginTop: '10px' }}>
            <Blockchain />
          </div>
      );
  }
}

export default App;