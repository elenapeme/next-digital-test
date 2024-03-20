import { useState } from 'react'
import { Users } from './components/Users.jsx'
import { useUsers } from './hooks/useUsers.ts'
import './App.css'

function App() {
  const { users, loading, error } = useUsers();

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error loading users: {error.message}</p>;


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
