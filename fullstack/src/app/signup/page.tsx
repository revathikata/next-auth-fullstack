"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import from 'next/router' instead of 'next/navigation'
import axios from 'axios';
import { error } from 'console';
import toast from 'react-hot-toast';

function SignPage() { // Rename the component to start with a capital letter
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user)
      console.log("signup success", response.data);
      router.push("/login")

    } catch (error: any) {
      console.log("signup failed", error.message);

      toast.error(error.message)
    } finally {

    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])
  return (
    <div className="f">
      <h1 className='text-center text-2xl'>{loading ? "processing" : "signup"}</h1>
      <hr />
      <div className='form text-center'>
        <div className="inputFeild">
          <label htmlFor="username">Username</label> <br />{/* Correct label text */}
          <input
            type="text"
            className='p-1 border border-gray-300 rounded-lg'
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder='username'
          />
        </div>
        <div className="inputFeild">
          <label htmlFor="email">Email</label> <br />{/* Correct label text */}
          <input
            type="email"
            className='p-1 border border-gray-300 rounded-lg'
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='email'
          />
        </div>
        <div className="inputFeild">
          <label htmlFor="email">password</label><br /> {/* Correct label text */}
          <input
            type="password"
            className='p-1 border border-gray-300 rounded-lg'
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='email'
          />
        </div>
        <button onClick={onSignup}>{buttonDisabled ? "No signup" : "SignUp"}</button>
        <Link href="/login" >Login page</Link>
      </div>

    </div>
  );
}

export default SignPage;