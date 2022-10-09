import {
  Nav,
  NavContainer,
  NavLogo,
  NavLink,
  NavItems,
  NavItem,
  MobileMenu,
  CloseMenu
} from './Style';
import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo className='nav__logo'>
            <img src={Logo} alt='logo' />
          </NavLogo>
          <MobileMenu click={click} onClick={handleClick} />
          {click && <CloseMenu onClick={handleClick} />}
          <NavItems click={click} className='nav_links'>
            <NavItem className='nav__link'>
              <NavLink onClick={handleClick} to='/hosting'>
                Hosting
              </NavLink>
            </NavItem>
            <NavItem className='nav__link'>
              <NavLink onClick={handleClick} to='/domain'>
                Domain
              </NavLink>
            </NavItem>
            <NavItem className='nav__link'>
              <NavLink onClick={handleClick} to='/pricing'>
                Pricing
              </NavLink>
            </NavItem>
          </NavItems>
        </NavContainer>
      </Nav>
    </>
  );
};
export default NavBar;
