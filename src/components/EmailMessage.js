
 const EmailMessage = function(props){
  return (
    <div className="message-summary">
      <h3>Subject: {props.message.subject}</h3>
      <h4>Date: {props.message.date}</h4>
      <h5>To: {props.message.recipient}</h5>
      <h5>From: {props.message.sender}</h5>
    </div>
  );

}

export default EmailMessage;