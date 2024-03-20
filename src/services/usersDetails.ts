
export const getUsersData = async ({ id }: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const json = await response.json()

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