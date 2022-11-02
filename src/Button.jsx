import {Link} from 'react-router-dom'

export default function Button({title, url}) {
  return (
    <Link to={url}>{title}</Link>
  )
}
