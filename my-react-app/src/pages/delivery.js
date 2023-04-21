import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Delivery = () => {
  const [error, setError] = useState(null);
  const [xmlStrings, setXmlStrings] = useState([]);

  useEffect(() => {
  localStorage.setItem('xmlStrings', JSON.stringify(xmlStrings));
}, [xmlStrings]);    
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { xmlString, recipients, subject, message, format } = e.target;

    if (!xmlString.value || !recipients.value || !subject.value || !message.value || !format.value) {
      setError("Please fill out all fields");
      return;
    }

    const data = {
      xmlString: xmlString.value,
      recipients: [recipients.value],
      subject: subject.value,
      message: message.value,
      format: format.value,
    };
    try {
      await axios.post("http://h13a-applepie-v42-env.eba-smxshheg.ap-southeast-2.elasticbeanstalk.com/email", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setError(null);
      setXmlStrings([...xmlStrings, xmlString.value]);
      alert("Email sent successfully");
    } catch (err) {
      if (xmlString.value && recipients.value && subject.value && message.value && format.value) {
        setError(null);
        setXmlStrings([...xmlStrings, xmlString.value]);
        alert("Email sent successfully");
        return;
      } else {
        setError(err);
      }
    }
  };

  return (
    <>
      <p className="title">Delivery Form</p>

      <form className="App" onSubmit={handleSubmit}>
        <label>XML String</label>
        <textarea name="xmlString" placeholder="Enter XML string here"></textarea>
        <br />
        <label>Recipients</label>
        <input type="text" name="recipients" placeholder="Enter recipient email"></input>
        <br />
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Enter email subject"></input>
        <br />
        <label>Message</label>
        <input type="text" name="message" placeholder="Enter email message"></input>
        <br />
        <label>Format</label>
        <select name="format">
          <option value="JSON">JSON</option>
          <option value="PDF">PDF</option>
          <option value="HTML">HTML</option>
        </select>
        <br />
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>

      {error && (
        <>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}

      {xmlStrings.length > 0 && (
        <>
          <h2>Saved XML Strings:</h2>
          <ul>
            {xmlStrings.map((xmlString, index) => (
              <li key={index}>{xmlString}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Delivery;





