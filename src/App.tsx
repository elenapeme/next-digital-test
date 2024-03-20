import { useState } from 'react'
import { Users } from './components/Users.jsx'
import { useUsers } from './hooks/useUsers.ts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const users = useUsers()

  return (
    <div className='page'>
      <header>
        <h1>Red Social de la Empresa</h1>
      </header>

      <main>
        <Users users={users}/>
      </main>
    </div>
  )
}

export default App
