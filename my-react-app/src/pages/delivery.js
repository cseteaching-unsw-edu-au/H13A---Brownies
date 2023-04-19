import React, { useState } from 'react';
import './Delivery.css';

const Delivery = () => {
  const [xmlString, setXmlString] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [format, setFormat] = useState('html');
  const [responseMessage, setResponseMessage] = useState('');

  const sendInvoice = async () => {
    try {
      const response = await fetch('http://h13a-applepie-v42-env.eba-smxshheg.ap-southeast-2.elasticbeanstalk.com/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ xmlString, email, subject, message: messageText, format }),
      });

      if (response.ok) {
        setResponseMessage('Invoice sent successfully!');
      } else {
        setResponseMessage('Failed to send the invoice. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="delivery-container">
      <h1>Send Invoice by Email</h1>
      <div className="input-group">
        <textarea
          placeholder="XML String"
          value={xmlString}
          onChange={(e) => setXmlString(e.target.value)}
          rows="10"
          cols="50"
        />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="input-group">
        <textarea
          placeholder="Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          rows="5"
          cols="50"
        />
      </div>
      <div className="input-group">
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="html">HTML</option>
          <option value="pdf">PDF</option>
          <option value="json">JSON</option>
        </select>
      </div>
      <button onClick={sendInvoice}>Send Invoice</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Delivery;


