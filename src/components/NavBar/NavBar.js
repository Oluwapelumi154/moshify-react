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
          <NavLogo>
            <img src={Logo} alt='logo' />
          </NavLogo>
          <MobileMenu click={click} onClick={handleClick} />
          {click && <CloseMenu onClick={handleClick} />}
          <NavItems click={click}>
            <NavItem>
              <NavLink onClick={handleClick} to='/hosting'>
                Hosting
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} to='/domain'>
                VPS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} to='/domain'>
                Domain
              </NavLink>
            </NavItem>
            <NavItem>
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
