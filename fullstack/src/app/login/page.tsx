"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import from 'next/router' instead of 'next/navigation'
import axios from 'axios';
import toast from 'react-hot-toast';

function LoginPage() { // Rename the component to start with a capital letter
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const OnLogin = async () => {
    try{
      setLoading(true)
      const response = await axios.post("/api/users/login",user)
      console.log("login success", response.data);
      router.push("/profile")
    }catch(error:any){
      console.log("login failed", error.message);
      toast.error(error.message)
    }
    finally{
setLoading(false)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  }, [user])

  return (
    <div className="f">
      <h1 className='text-center text-2xl'>{loading ? "processing":"login"}</h1>
      <hr />
      <div className='form text-center'>

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
        <button onClick={OnLogin}>Login</button>
        <Link href="/signup" >signup here</Link>
      </div>

    </div>
  );
}

export default LoginPage;