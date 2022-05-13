import { Link } from '../../../packages'

export const Navigation: React.FC = () => (
  <ul>
    <li>
      <Link to="/">Main page</Link>
    </li>
    <li>
      <Link to="/user">Users list</Link>
    </li>
  </ul>
)
