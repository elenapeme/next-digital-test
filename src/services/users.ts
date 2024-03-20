type Address = {
    city: string
}

type User = {
    id: number
    name: string
    username: string
    email: string
    address: Address
    website: string
}

export const getUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`)
    const json = await response.json()

      console.log(json)
    return json?.map((user: User) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        website: user.website
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}