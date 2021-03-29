import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {

    };
  }
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Header for App
          <nav>
            <button>Inbox</button>
            <button>Compose</button>
          </nav>
        </header>
        <main>
          
        </main>
      </div>
    )
  };
}

export default App;
