import { Link } from 'react-router-dom'
import './style.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/student">Student</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
        </div>
    )
}

export default Navbar