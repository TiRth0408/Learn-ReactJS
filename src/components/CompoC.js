import React from 'react'
import CompoA from './CompoA'
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const CompoC = () => {

  const user = useContext(UserContext);
  
  return (
    <div className="border border-black">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default CompoC