import { User } from '../types/User'

export function userMapping(users: User[]) {
    return users?.map((user: User) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        website: user.website
    }))
}