import { googleSignin, googleSignout } from '../utils/auth'

export default function AuthPage() {
  return (
    <main>
      <button onClick={googleSignin}>Google Signin</button>
      <button onClick={googleSignout}>Google Signout</button>
    </main>
  )
}
