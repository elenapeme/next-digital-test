import { User } from '../types/User'
import { userMapping } from '../utils/userMapping'

export const getUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const json = await response.json()

    return userMapping(json)
  } catch (e) {
    throw new Error('Error searching movies')
  }
}