import { useState, useEffect } from 'react'
import { getUsers } from '../services/users.ts'

export function useUsers() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const usersList = await getUsers()
                setUsers(usersList)
            } catch (e) {
                console.error("Ha habido un error: ", e)
                setError(e)
            } finally {
                setLoading(false)
            }
        })();
    }, []);

    return { users, loading, error }
}