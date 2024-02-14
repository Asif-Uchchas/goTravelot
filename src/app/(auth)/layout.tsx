import { FC, ReactNode } from "react"

interface AuthLayOutProps{
    children: ReactNode
}

const AuthLayOut:FC<AuthLayOutProps> = ({children}) => {
  return (
    <div className="bg-slate-200 p-10 rounded-md">
        {children}
    </div>
  )
}

export default AuthLayOut
