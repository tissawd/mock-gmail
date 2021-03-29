import React from 'react';
import MessageList from './components/MessageList'
import './App.css';
import EmailMessage from './components/EmailMessage';

var url = "http://localhost:3001/";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      selectedMessage: {},
    };
    this.getAllMessages = this.getAllMessages.bind(this);
    this.setReadingPane = this.setReadingPane.bind(this);
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

  setReadingPane(message){
    this.setState((state) => {
      return (
        {
          selectedMessage: message,
        }
      );
    });
    console.log(this.state.selectedMessage);
  };

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
            <MessageList selectMessage={this.setReadingPane} messages={this.state.messages} />
          </aside>
          <div className="reading-pane">
            <EmailMessage message={this.state.selectedMessage}/>
            <p>{this.state.selectedMessage.message}</p>
          </div>
        </main>
      </div>
    )
  };
}

export default App;
