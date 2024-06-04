import { useState } from 'react'
import './App.css'

function App() {

  const userId = null
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("username:", username)
    console.log("password: ", password)
  }

  const handleLogout = () => {
    console.log("logging out")
  }

  return (
    <>
      <nav>
        <h1>Home</h1>
        {userId &&
          <button onClick={handleLogout}>Logout</button>
        }
        {!userId &&
          <button>Login</button>
        }
      </nav>

      {!userId &&
        <form onSubmit={handleLogin}>
          <input 
            type='text' 
            value={username} 
            placeholder='Username' 
            onChange={(e) => setUsername(e.target.value)}
            />
          <input 
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            />
          <input 
            type='submit'
            />
        </form>
      }

      {userId && 
        <h3>Welcome, user # {userId}</h3>
      }
    </>
  )
}

export default App
