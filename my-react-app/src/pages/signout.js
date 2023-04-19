import React, { useState } from 'react';
import axios from 'axios';

const SignOut = () => {
  const [logoutStatus, setLogoutStatus] = useState('');

  const signout = async () => {
    try {
      const response = await axios.post("http://h10a-brownie-dev.ap-southeast-2.elasticbeanstalk.com/auth/logout");

      if (response.status === 200) {
        localStorage.removeItem('authToken'); // Remove the token from local storage
        setLogoutStatus('Logout successful');
      } else {
        setLogoutStatus('Logout failed');
      }
    } catch (err) {
      setLogoutStatus('Error during logout: ' + err.message);
    }
  };

  return (
    <div>
      <button onClick={signout}>Logout</button>
      {logoutStatus && <p>{logoutStatus}</p>}
    </div>
  );
};

export default SignOut;


