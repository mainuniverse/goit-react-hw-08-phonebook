import routes from '../routes';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';


const AuthMenu = ({ userMail, onLogout }) => (
  <Toolbar
    style={{
      backgroundColor: 'lightblue',
      justifyContent: 'flex-start',
    }}
  >
    <Toolbar>
      {' '}
      <NavLink to={routes.home} className = "linkHome" activeClassName="active-linkHome">
       Home
      </NavLink>
      <NavLink to={routes.register} className = "linkHome" activeClassName="active-linkHome">
        Sing Up
      </NavLink>
      <NavLink to={routes.login}className = "linkHome"  activeClassName="active-linkHome">
        Login
      </NavLink>
    </Toolbar>
  </Toolbar>
);
export default AuthMenu;
