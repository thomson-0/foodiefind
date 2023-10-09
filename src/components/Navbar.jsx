import React from 'react';
import { PiForkKnifeDuotone } from 'react-icons/pi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
display: flex;
align-items: center;
height: 60px;
justify-content: flex-start;
@media (max-width: 768px) {
  display: flex;
  align-items: center;
  height: 60px;
  justify-content:center ;
}
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2.5rem;
  color:black;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to={'/'} >
        <PiForkKnifeDuotone />
      </Logo>
      deliciouss
    </NavbarContainer>
  );
};

export default Navbar;
