import { useGetUsers } from '../../domain/entities/user/'
import { Link } from '../../packages'

const UserPage: React.FC = () => {
  const userIds = useGetUsers()
  return (
    <>
      <h1>User page</h1>
      <ul>
        {userIds.map((id) => (
          <li key={id}>
            <Link to={`${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserPage
