import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, container } from '../../global-style';
import { FaBars, FaTimes } from 'react-icons/fa';
export const Nav = styled.nav`
  background-color: ${color.black};
  height: 75px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  // margin-top: 20px;
 
  }
`;
export const NavContainer = styled(container)`
  ${container};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: 40px;
  }
`;
export const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    position: absolute;
    opacity: 1;
    transition: all 0.7s ease;
    z-index: 9999;
    left: ${({ click }) => (click ? '0' : '-100%')};
    top: 74px;
    background-color: ${color.black};
    width: 100%;
    display: table;
    height: 90vh;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${color.white};
  transition: color 0.5s;
  &:hover {
    color: ${color.blue};
  }
`;
export const NavItem = styled.li`
  margin-right: 2rem;
  font-size: 1.6rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    height: 35px;
    text-align: center;
    font-size: 1.5rem;
  }
  &::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid red;
  }
`;
export const MobileMenu = styled(FaBars)`
  display: none;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    font-weight: 200;
    transition: all 500ms;
    color: ${color.white};
    display: ${({ click }) => (click ? 'none' : 'block')};
    position: absolute;
    right: 25px;
  }
`;
export const CloseMenu = styled(FaTimes)`
  font-size: 30px;
  color: ${color.white};
  position: absolute;
  transition: all 500ms;
  right: 25px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
