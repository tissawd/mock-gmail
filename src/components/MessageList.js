import EmailMessage from './EmailMessage';

const MessageList = function(props){
  return (
    <div>
      {props.messages.map((message) => {
        return(
          <div onClick={(e) => props.selectMessage(message)}>
            <EmailMessage message={message}/>
          </div>
          )
      })}
    </div>
  );
};


export default MessageList;