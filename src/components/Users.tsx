function ListOfUsers({ users }) {
    return (
        <ul className='users'>
      {
        users.map(user => (
          <li className='user' key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))
      }
    </ul>
    )
}

function NoUsersResults() {
    return (
        <p>No se ha podido mostrar la lista de usuarios. Intentalo más tarde.</p>
    )
}

export function Users({ users }) {
    const hasUsers = users?.length > 0

    return (
        hasUsers ? <ListOfUsers users={users} /> : <NoUsersResults />
    )
}