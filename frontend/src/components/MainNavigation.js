import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
 

export function MainNavigation() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="nav-left">
          <h2 className="heading">
            users
          </h2>
        </div>

        <ul className="nav-list">
        <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/adduser"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Add User
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
