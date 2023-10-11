import Button from '../Button';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <img className='logo' src='/assets/img/ddroidd_logo.svg' alt='logo' />
      <p>Autumn - Winter Bootcamp</p>
      {location.pathname === '/' && <Button path={'/form'} />}
    </nav>
  );
};

export default Navbar;
