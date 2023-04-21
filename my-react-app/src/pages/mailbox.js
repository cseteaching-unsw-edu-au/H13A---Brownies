import React, { useState, useEffect } from 'react';

const Mailbox = () => {
  const [xmlStrings, setXmlStrings] = useState([]);

  useEffect(() => {
    const savedXmlStrings = JSON.parse(localStorage.getItem('xmlStrings')) || [];
    setXmlStrings(savedXmlStrings);
  }, []);

  useEffect(() => {
    localStorage.setItem('xmlStrings', JSON.stringify(xmlStrings));
  }, [xmlStrings]);

  const handleClear = () => {
    localStorage.removeItem('xmlStrings');
    setXmlStrings([]);
  };

  return (
    <div>
      <h1>Mailbox</h1>
      <ul>
        {xmlStrings.map((xmlString, index) => (
          <li key={index}>{xmlString}</li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Mailbox;


