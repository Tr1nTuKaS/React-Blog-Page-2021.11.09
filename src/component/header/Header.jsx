import css from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={css.header}>
      <div className='container'>
        <Link className={css.logo} to='/'>
          CRA<strong>Blog</strong>
        </Link>
        <nav>
          <Link className={css['nav-link']} to='/blog'>
            Our Blog
          </Link>
          <Link className={css['nav-link']} to='/about'>
            About us
          </Link>
          <Link className={css['nav-link']} to='/contact'>
            Contact Us
          </Link>
        </nav>
        <nav>
          <Link className={css['nav-link']} to='/login'>
            Login/Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;