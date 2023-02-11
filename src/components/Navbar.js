import { Link, NavLink } from "react-router-dom";

export default function Navbar(){

    function buttonClicked(){
      const d = document.querySelector('.mobile-links')
      d.classList.add('show');
    }

    return (
      <div>
        <nav className="navbar">
          <div className="name">Anna</div>
          <div className="links">
            <NavLink 
              className={({ isActive}) => isActive ? 'is-active': ''}
              to="/">
              Home
            </NavLink>

            <NavLink 
            className={({ isActive}) => isActive ? 'is-active': ''}
            to="/about">About</NavLink>
            <button>Contact</button>
          </div>
        </nav>
        <nav className="mobile-nav">
          <button onClick={buttonClicked}>Nav button</button>
          <div className="mobile-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button>Contact</button>
          </div>
        </nav>
      </div>
    )
}