import { useGetUser } from '../../domain/entities/user/'
import { useParams } from '../../packages'

const User: React.FC = () => {
  const params = useParams()
  const user = useGetUser(params.id)

  if (!user) return <h1>User is not found</h1>

  return (
    <>
      <h1>{`User #${user.id}`}</h1>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
    </>
  )
}

export default User
