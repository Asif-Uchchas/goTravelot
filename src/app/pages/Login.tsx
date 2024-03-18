// "use client"
// import { ChangeEvent, FC, useState } from "react";
// import auth from "./api/auth";

// interface loginProps {}
 
// const Login: FC<loginProps> = ({}) => {
//     const {} = auth.loginHandler()
//     const [input, setInput] = useState({
//         email: '',
//         password: '',
//     })


//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = e.target
//         setInput((prev) => ({...prev,[name]: value}))
//     }

//     return (
//         <div className="m-10 pt-10 flex justify-center items-center">
//             <input placeholder="Type in your email" type="text" value={input.email} onChange={handleChange}/>
//             <input placeholder="Enter your password" type="text" value={input.password} onChange={handleChange} />
//             <button type="button">Sign In</button>
//         </div>
//     )
// }
 
// export default Login;

// CHATGPT HELPED
"use client"
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('pages/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
