import { FC, ReactNode } from "react"
import { Button } from "./ui/button"

interface GoogleSignInButtonProps{
    children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({children}) => {
  const loginWithGoogle=()=>console.log('login with google');
  return (
    <div>
        <Button onClick={loginWithGoogle} className="w-full">{children}</Button>
    </div>
  )
}

export default GoogleSignInButton
