import React from 'react';
import axios from 'axios';

const SignOut = () => {
  const signout = async () => {
    try {
      const response = await axios.post("http://h10a-brownie-dev.ap-southeast-2.elasticbeanstalk.com/auth/logout");

      if (response.status === 200) {
        localStorage.removeItem('authToken'); // Remove the token from local storage
        console.log('Logout successful');
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  return (
    <button onClick={signout}>Logout</button>
  );
};

export default SignOut;

