import {Link} from "react-router-dom"


const NavBar = () => (
    <header className='navbar'>
        <Link to='/' className='navbar__title navbar__item'>Home</Link>
        <Link to='/users' className='navbar__item'>USERS</Link>
        <Link to='/y' className='navbar__item'>4 0 4</Link>
        <Link to='/test-error' className='navbar__item'>Test Error Boundary</Link>
        <Link to='/auth' className='navbar__item'>Login</Link>        
    </header>
);

export default NavBar;