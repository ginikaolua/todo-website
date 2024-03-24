import{FaInfoCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const AboutIconLink = () => {
  return (
    <div >
      <Link to= '/about'>
        <FaInfoCircle className='about-link' size={40}/>
      </Link>
    </div>
  )
}

export default AboutIconLink
