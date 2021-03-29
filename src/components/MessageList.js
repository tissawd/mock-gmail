import EmailMessage from './EmailMessage';

const MessageList = function(props){
  return (
    <div>
      {props.messages.map((message) => {
        return(
          <EmailMessage message={message}/>
          )
      })}
    </div>
  );
};


export default MessageList;