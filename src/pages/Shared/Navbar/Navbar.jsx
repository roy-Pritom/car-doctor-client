import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-32">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li tabIndex={0}>
              <Link to='/about'>About</Link>
              
              </li>
              <li>
              <Link to='/services'>Services</Link>

              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link to='/'>Home</Link>

            </li>
            <li tabIndex={0}>
                <Link to='/about'>About</Link>
                               
            </li>
            <li>
            <Link to='/services'>Services</Link>

                </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'>
          <button className="btn btn-secondary mr-4">Login</button>
          
          </Link>
        <button className="btn btn-outline btn-secondary">Appointment</button>

        </div>
      </div>
    );
};

export default Navbar;