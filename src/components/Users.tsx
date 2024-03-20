function ListOfUsers({ users }) {
    return (
        <ul className='users'>
      {
        users.map(user => (
          <li className='user-card' key={user.id}>
            <h3>{user.name}</h3>
            <div>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <p>{ user.website}</p>
            </div>
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