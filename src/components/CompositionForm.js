

const CompositionForm = function(props){

  const sendEmail = function(){
    let url = 'http://localhost:3001/';
    let messageToSend = {
      sender: 'me@domain.com',
      recipient: 'test',
      subject: 'test',
      message: 'test',
      date: new Date(),
      id: '123456',
    }
    fetch(url, {method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageToSend)  
    } );
  }

  return (
    <div className="new-message">
      <form>
        <label for="to-field">To: </label>
        <input type="email" id="to-field" name="recipient"></input>
        <label for="subject">Subject: </label>
        <input type="text" id="subject-field" name="subject"></input>
        <br />
        <textarea id="message-to-send" name="message"></textarea>
        <button onClick={sendEmail()}>Send</button>
        <button onClick={props.close}>Close</button>
      </form>
    </div>

  );
};


export default CompositionForm;