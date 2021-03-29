import React from 'react';
import MessageList from './components/MessageList'
import './App.css';

var url = "http://localhost:3001/";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      selectedMessage: null,
    };
    this.getAllMessages = this.getAllMessages.bind(this);
  }
  
  getAllMessages(){
    let endpoint = `${url}emails`;
    async function fetchMessages(endpoint){
      let messagesRaw = await fetch(endpoint)
      let messagesArray = await messagesRaw.json();
      console.log(messagesArray);
      this.setState((state) => {
        return {
          messages: messagesArray,
        }
      })
    }
    return fetchMessages.call(this, endpoint);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gmail-ish</h1>
          <nav>
            <button onClick={() => this.getAllMessages()}>Inbox</button>
            <button>Compose</button>
          </nav>
        </header>
        <main className="main">
          <aside className="inbox">
            <MessageList messages={this.state.messages} />
          </aside>
          <div className="reading-pane">

          </div>
        </main>
      </div>
    )
  };
}

export default App;
