"use client"
import { ChangeEvent, FC, useState } from "react";

interface loginProps {}
 
const Login: FC<loginProps> = ({}) => {
    const [input, setInput] = useState({
        email: '',
        password: '',
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInput((prev) => ({...prev,[name]: value}))
    }

    return (
        <div className="flex justify-center flex-col gap-4">
            <input placeholder="Type in your email" type="text" value={input.email} onChange={handleChange}/>
            <input placeholder="Enter your password" type="text" value={input.password} onChange={handleChange} />
            <button type="button">Sign In</button>
        </div>
    )
}
 
export default Login;