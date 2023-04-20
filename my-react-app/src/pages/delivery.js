/*import React, { useState } from 'react';
import axios from 'axios';

const Delivery = () => {
  const [xmlString, setXmlString] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [format, setFormat] = useState('JSON');
  const [status, setStatus] = useState('');
  const [communicationReport, setCommunicationReport] = useState('');

  const handleRecipientsChange = (event) => {
    setRecipients(event.target.value.split(','));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://h13a-applepie-v42-env.eba-smxshheg.ap-southeast-2.elasticbeanstalk.com/email', {
        xmlString,
        recipients,
        subject,
        message,
        format,
      });
      setStatus('Email sent successfully!');
      setCommunicationReport(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      setStatus('Error sending email.');
      setCommunicationReport(JSON.stringify(error.response.data));
    }
  };

  return (
    <>
      <h1>Delivery</h1>
      <form onSubmit={handleSubmit}>
        <label>
          XML String:
          <input type="text" value={xmlString} onChange={(e) => setXmlString(e.target.value)} />
        </label>
        <br />
        <label>
          Recipients:
          <input type="text" value={recipients} onChange={handleRecipientsChange} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <label>
          Format:
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="JSON">JSON</option>
            <option value="PDF">PDF</option>
            <option value="html">html</option>
          </select>
        </label>
        <br />
        <button type="submit">Send Email</button>
      </form>
      <p>{status}</p>
      <h2>Communication Report:</h2>
      <p>{communicationReport}</p>
    </>
  );
};

export default Delivery;
*/
/*import React, { useState } from 'react';
import "./registrationpage.css";
import axios from 'axios';

const Delivery = () => {
  const [input, setInput] = useState({
    xmlString: "",
    recipients: [""],
    subject: "",
    message: "",
    format: ""
  });

  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    try {
      const response = await axios.post("http://h13a-applepie-v42-env.eba-smxshheg.ap-southeast-2.elasticbeanstalk.com/email", input, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
      setStatus("Email sent successfully!");
      setResponse(response.data);
    } catch (error) {
      console.log(error);
      setStatus("Error sending email");
      setResponse(error.response ? error.response.data : "Network error");
    }
  };

  return (
    <>
      <p className="title">Delivery Form</p>

      <form className="App" style={{ marginRight: "-20%" }} onSubmit={handleSubmit}>
        <label>XML String</label>
        <textarea name="xmlString" onChange={handleChange} value={input.xmlString} />
        <label>Recipients</label>
        <input type="text" name="recipients" onChange={handleChange} value={input.recipients} />
        <label>Subject</label>
        <input type="text" name="subject" onChange={handleChange} value={input.subject} />
        <label>Message</label>
        <textarea name="message" onChange={handleChange} value={input.message} />
        <label>Format</label>
        <select name="format" onChange={handleChange} value={input.format}>
          <option value="">Select format</option>
          <option value="JSON">JSON</option>
          <option value="PDF">PDF</option>
          <option value="html">html</option>
        </select>
        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
      {status && <p>{status}</p>}
      {response && <div><h2>Communication Report:</h2><p>{response}</p></div>}
    </>
  );
};

export default Delivery;
*/
/*
import React, { useState } from 'react';
import axios from 'axios';

const Delivery = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      xmlString: e.target.xmlString.value,
      recipients: [e.target.recipients.value],
      subject: e.target.subject.value,
      message: e.target.message.value,
      format: e.target.format.value,
    };
    try {
      const res = await axios.post("http://h13a-applepie-v42-env.eba-smxshheg.ap-southeast-2.elasticbeanstalk.com/email", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setResponse(res);
      setError(null);
    } catch (err) {
      setResponse(null);
      setError(err);
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

      {response && (
        <>
          <h2>Communication Report:</h2>
          <p>Response Headers:</p>
          <pre>{JSON.stringify(response.headers, null, 2)}</pre>
          <p>Response Data:</p>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </>
      )}

      {error && (
        <>
          <h2>Communication Report:</h2>
          <p>Error:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default Delivery;
*/
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





