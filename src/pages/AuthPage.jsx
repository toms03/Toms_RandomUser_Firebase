import { googleSignin, googleSignout } from '../utils/auth'
import {useState} from "react"

export default function AuthPage() {
  const [users, setUsers] = useState(null)

  return (
    <main>
      {users ? <button onClick={()=>{
      googleSignout()
      setUsers(null)
    }}>Google Signout</button>
      : <button onClick={()=>{
      const user = googleSignin()
      if (user) setUsers(user);
      else setUsers(null)
    }}>Google Sign-in</button>}
    </main>
  )
}
