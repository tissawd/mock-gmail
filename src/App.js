import React from 'react';
import MessageList from './components/MessageList'
import './App.css';
import EmailMessage from './components/EmailMessage';
import CompositionForm from './components/CompositionForm';


var url = "http://localhost:3001/";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      messages: [],
      selectedMessage: {},
      composer: false,
    };
    this.getAllMessages = this.getAllMessages.bind(this);
    this.setReadingPane = this.setReadingPane.bind(this);
    this.openComposer = this.openComposer.bind(this);
    this.closeComposer = this.openComposer.bind(this);
  }
  
  getAllMessages(){
    let endpoint = `${url}emails`;
    async function fetchMessages(endpoint){
      let messagesRaw = await fetch(endpoint)
      let messagesArray = await messagesRaw.json();
      // console.log(messagesArray);
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
    // console.log(this.state.selectedMessage);
  };

  openComposer(){
    this.setState((state) => {
      return (
        {composer: true}
      )
    })
  }

  closeComposer(){
    this.setState((state) => {
      return (
        {composer: false}
      )
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gmail-ish</h1>
          <nav>
            <button onClick={() => this.getAllMessages()}>Inbox</button>
            <button onClick={this.openComposer}>Compose</button>
          </nav>
        </header>
        <main className="main">
          {this.state.composer ?
            <CompositionForm close={this.closeComposer} /> : null
          }
          <aside className="inbox">
            <MessageList selectMessage={this.setReadingPane} messages={this.state.messages} />
          </aside>
          {this.state.selectedMessage.id ?
            <div className="reading-pane">
              <EmailMessage message={this.state.selectedMessage}/> 
              <p>{this.state.selectedMessage.message}</p>     
            </div>
            : null
          }
        </main>
      </div>
    )
  };
}

export default App;
